<?php
Route::middleware(['auth:admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::get('/', function () {
            dump(auth());
            return view('dashboard1');
        })->name('dashboard');
    });
