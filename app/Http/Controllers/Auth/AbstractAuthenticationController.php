<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\CarbonImmutable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AbstractAuthenticationController extends Controller
{
    /**
     * Login a user into the network
     *
     * @param Request $request
     * @param User $user
     * @return JsonResponse
     */
    public function sendLoginSuccessResponse(Request $request, User $user): JsonResponse
    {

        /*
         * Clear and regenerate session
         */
        $request->session()->forget('two_factor_authentication');
        $request->session()->regenerate();

        /*
         * Log user in
         */
        Auth::login($user, false);

        return response()->json([
            'complete' => true,
            'data' => [
                'uuid' => $user->uuid
            ]
        ]);
    }

    /**
     * Logout a user out of the network
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function sendLogoutSuccessResponse(Request $request): JsonResponse
    {

        /*
         * Log user out
         */
        Auth::logout();

        /*
         * Regenerate session
         */
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'success' => true
        ])->withoutCookie('user');
    }
}
