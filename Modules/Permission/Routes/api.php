<?php
use \Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//register token api


//middleware('auth:api')
Route::prefix('permission')
    ->name('permission.')
    ->group(function () {

        Route::middleware('auth:sanctum')->group(function () {

            Route::get('/info',function (Request $request){
                //auto login auth yes
                dump($request->user());
                dump(auth()->user());
            });

        });

    });
