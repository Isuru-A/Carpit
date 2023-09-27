<?php

namespace App\Providers;

use App\Contracts\Repository\EnquiryRepositoryInterface;
use App\Contracts\Repository\RepositoryInterface;
use App\Repositories\EnquiryRepository;
use App\Repositories\Repository;
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
    }
}
