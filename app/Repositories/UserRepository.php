<?php

namespace App\Repositories;

use App\Contracts\Repository\UserRepositoryInterface;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Support\Str;
use Throwable;

class UserRepository implements UserRepositoryInterface
{
    public function index(): Collection
    {
        return User::all();
    }

    /**
     * @throws Throwable
     */
    public function create(array $data, bool $force): User
    {
        $user = new User();

        $force ? $user->forceFill($data) : $user->fill($data);

        $user->saveOrFail();

        return $user;
    }

    /**
     * @inheritDoc
     */
    public function get($uuid): array|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Model
    {
        $user = [];
        if (Str::isUuid($uuid)) {
            $user = User::query()->find($uuid);
            /*
             * If the provided identifier is an email, search for user using
             * their email instead of UUID
             */
        } else if (filter_var($uuid, FILTER_VALIDATE_EMAIL)) {
            $user = User::query()->where('email', $uuid)->first();
        }

        if (!$user) {
            throw new ModelNotFoundException('User not found');
        }

        return $user;
    }

    /**
     * @inheritDoc
     */
    public function update($uuid, array $data): mixed
    {
        try {
            $user = User::query()->findOrFail($uuid);
        } catch (ModelNotFoundException $e) {
            throw new ModelNotFoundException('User not found');
        }

        try {
            $user->fill($data);
            if ($user->isDirty()) {
                $user->save();
            }
        } catch (QueryException $e) {
            return false;
        }

        return $user;
    }
}
