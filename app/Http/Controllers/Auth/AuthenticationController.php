<?php

namespace App\Http\Controllers\Auth;

use App\Contracts\Repository\UserRepositoryInterface;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AuthenticationController extends AbstractAuthenticationController
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
        Hasher $hasher
    ) {
        $this->userRepository = $userRepository;
        $this->hasher = $hasher;
    }

    public function login(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email:rfc,dns',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $user = $this->userRepository->get($request->input('email'));
        } catch (ModelNotFoundException $e) {
            return new JsonResponse([
                'success' => false,
                'errors' => [
                    'email' => $e->getMessage()
                ]
            ], 404);
        }

        if (!$this->hasher->check($request->input('password'), $user->password)) {
            return new JsonResponse([
                'success' => false,
                'errors' => [
                    'password' => 'Invalid password'
                ]
            ], 401);
        }

        return $this->sendLoginSuccessResponse($request, $user);
    }
}
