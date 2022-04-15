<?php

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

Route::middleware(['auth:admin'])
    ->prefix('permission')
    ->group(function () {

        Route::view('/{any?}', 'permission::index')
            ->where('any', '.*');

//        Route::get('/', 'PermissionController@index');
//        Route::prefix('users')->name('users.')->group(function () {
//            Route::get('/', 'UserController@index')->name('index');
//            Route::get('/create', 'UserController@create')->name('create');
//            Route::get('/edit/{id}', 'UserController@edit')->name('edit');
//            Route::get('/show/{id}', 'UserController@show')->name('show');
//        });
    });
