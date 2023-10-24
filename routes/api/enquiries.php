<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('/{id}')->group(function () {
    Route::post('/message', [\App\Http\Controllers\MessageController::class, 'create']);
    Route::get('/messages', [\App\Http\Controllers\MessageController::class, 'get']);
});
