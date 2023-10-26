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
Route::group(['middleware' => ['auth', 'admin']], function () {
    Route::prefix('enquiries')->group(function () {
        Route::get('/', [\App\Http\Controllers\Admin\AdminEnquiryController::class, 'index']);
        Route::get('/{id}', [\App\Http\Controllers\Admin\AdminEnquiryController::class, 'get']);
        Route::post('/{id}/accept', [\App\Http\Controllers\Admin\AdminEnquiryController::class, 'accept']);
        Route::post('/{id}/archive', [App\Http\Controllers\Admin\AdminEnquiryController::class, 'archive']);
        Route::post('/{id}/complete', [App\Http\Controllers\Admin\AdminEnquiryController::class, 'complete']);
    });
});
