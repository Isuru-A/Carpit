<?php

namespace App\Console\Commands;

use App\Services\Enquiry\User\CreateUserService;
use Exception;
use Illuminate\Console\Command;

class CreateNewUser extends Command
{
    /**
     * @var CreateUserService
     */
    private CreateUserService $createUserService;

    public function __construct(
        CreateUserService $createUserService
    )
    {
        parent::__construct();
        $this->createUserService = $createUserService;
    }

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'carpit:create-new-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new user';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $data = [];
        $data['email'] = $this->ask("Email: ");
        $data['name_first'] = $this->ask("First name: ");
        $data['name_last'] = $this->ask("Last name: ");
        $data['admin'] = $this->anticipate("Admin [No]: ", ['No']);
        $data['password'] = $this->secret("Password: ");

        $data['admin'] === 'Yes' ? $data['admin'] = 1 : $data['admin'] = 0;


        try {
            $this->createUserService->handle($data, true);
        } catch (Exception $e) {
            $this->error($e->getMessage());
        }
    }
}
