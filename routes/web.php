<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::post('/enquire', [\App\Http\Controllers\EnquiryController::class, 'create']);

Route::view('admin', 'app')->middleware(['auth', 'admin']);
Route::any('admin/{all}', function () {
    return view('app');
})
    ->where(['all' => '.*'])
    ->middleware(['auth', 'admin']);

Route::redirect('/auth', '/auth/login');
Route::view('/auth/login', 'app')
    ->name('login');
Route::post('auth/login', [\App\Http\Controllers\Auth\AuthenticationController::class, 'login']);
Route::any('auth/{all}', function () {
    return view('app');
})
    ->where(['all' => '.*']);

/**
 * All other routes
 * Any routes that should be protected MUST be initialised before these in order for
 * protections to work
 */
Route::any('{all}', function () {
    return view('app');
})
    ->where(['all' => '.*']);

