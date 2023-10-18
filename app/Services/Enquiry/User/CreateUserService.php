<?php

namespace App\Services\Enquiry\User;

use App\Contracts\Repository\UserRepositoryInterface;
use App\Models\User;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class CreateUserService
{
    /**
     * @var UserRepositoryInterface
     */
    private UserRepositoryInterface $userRepository;

    /**
     * @var Hasher
     */
    private Hasher $hasher;

    public function __construct(
        UserRepositoryInterface $userRepository,
        Hasher                  $hasher
    )
    {
        $this->userRepository = $userRepository;
        $this->hasher = $hasher;
    }

    /**
     * @throws ValidationException
     */
    public function handle(array $data): User
    {
        /*
         * Validate data
         */
        $validator = Validator::make($data, [
            'email' => 'required|email:rfc,dns',
            'name_first' => 'required',
            'name_last' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        /*
         * Hash password
         */
        $data['password'] = $this->hasher->make($data['password']);

        /*
         * Create and return new user
         */
        return $this->userRepository->create([
            ...$data,
            'uuid' => Str::uuid()
        ], true);
    }
}
