<?php
Route::middleware(['auth:writer'])
    ->prefix('writer')
    ->name('writer.')
    ->group(function () {
        Route::get('/', function () {
            dump(auth());
            return view('dashboard1');
        })->name('dashboard');
    });
