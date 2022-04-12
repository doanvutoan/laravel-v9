<?php
Route::middleware(['auth:writer'])
    ->prefix('writer')
    ->name('writer.')
    ->group(function () {
        Route::get('/dashboard', function () {
            dump(auth());
            return view('dashboard1');
        })->name('dashboard');
    });
