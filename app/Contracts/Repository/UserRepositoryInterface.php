<?php

namespace App\Contracts\Repository;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

interface UserRepositoryInterface
{
    /**
     * Get a collection of all users
     *
     * @return Collection
     */
    public function index(): Collection;

    /**
     * Add new user to database
     *
     * @param array $data
     * @param bool $force
     * @return User
     */
    public function create(array $data, bool $force): User;

    /**
     * Get a specific user by UUID or Email
     *
     * @param $uuid
     * @return User|null
     */
    public function get($uuid): mixed;

    /**
     * Update a user's account store
     *
     * @param $uuid
     * @param array $data
     * @return mixed
     */
    public function update($uuid, array $data): mixed;
}
