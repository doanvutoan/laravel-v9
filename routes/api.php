<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('/token', function (Request $request) {
    $user = \App\Models\User::where('email', $request['email'])->firstOrFail();
    if (!$user || !\Illuminate\Support\Facades\Hash::check($request->password, $user->password)) {
        return response()->json([
            'message' => 'Invalid login details'
        ], 401);
    }

    $token = $user->createToken('api_token')->plainTextToken;
    return response([
        'user' => $user,
        'token' => $token
    ], 200);
})->name('token');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/remove-token', function (Request $request) {
        //option 2: not found function currentAccessToken
        $model = \Laravel\Sanctum\Sanctum::$personalAccessTokenModel;
        $token = $model::findToken($request->bearerToken());
        $request->user()->tokens()->where('id',$token->id)->delete();
    });
});
