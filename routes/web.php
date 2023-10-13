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

Route::view('admin', 'app')->middleware('auth');
Route::any('admin/{all}', function () {
    return view('app');
})->where(['all' => '.*'])->middleware('auth');

Route::view('login', 'app')->name('login');

/**
 * All other routes
 * Any routes that should be protected MUST be initialised before these in order for
 * protections to work
 */
Route::any('{all}', function () {
    return view('app');
})->where(['all' => '.*']);

