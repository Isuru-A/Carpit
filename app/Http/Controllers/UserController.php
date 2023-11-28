<?php

namespace App\Http\Controllers;

use App\Services\User\CreateUserService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * @var CreateUserService
     */
    private CreateUserService $createUserService;

    public function __construct(
        CreateUserService $createUserService
    )
    {
        $this->createUserService = $createUserService;
    }

    /**
     * Handle requests to get user
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function get(Request $request): JsonResponse
    {
        return new JsonResponse([
            'success' => true,
            'data' => $request->user()
        ]);
    }

    /**
     * Handle requests to create a new user
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email:rfc,dns',
            'name_first' => 'required',
            'name_last' => 'required',
            'phone' => 'required'
        ]);

        if ($validator->fails()) {
            return new JsonResponse([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $user = $this->createUserService->handle($validator->validated());
            Auth::login($user); //TODO Idk if the user should be automatically logged in or not
        } catch (Exception $e) {
            return new JsonResponse([
                'success' => false
            ], 500);
        }

        return new JsonResponse([
            'success' => true
        ]);
    }
}
