<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function (Request $request) {
    return view('welcome');
});

Route::middleware(['auth:web'])
    ->name('web.')
    ->group(function () {
        Route::get('/dashboard', function () {
            return view('dashboard1');
        })->name('dashboard');
    });


require __DIR__ . '/auth.php';
