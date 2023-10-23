<?php

namespace App\Providers;

use App\Contracts\Repository\EnquiryRepositoryInterface;
use App\Contracts\Repository\MessageRepositoryInterface;
use App\Contracts\Repository\RepositoryInterface;
use App\Contracts\Repository\UserRepositoryInterface;
use App\Repositories\EnquiryRepository;
use App\Repositories\MessageRepository;
use App\Repositories\Repository;
use App\Repositories\UserRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(RepositoryInterface::class, Repository::class);
        $this->app->bind(EnquiryRepositoryInterface::class, EnquiryRepository::class);
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(MessageRepositoryInterface::class, MessageRepository::class);
    }
}
