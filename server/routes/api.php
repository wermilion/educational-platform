<?php

use App\Http\Controllers\Api\LessonController;
use App\Http\Controllers\Api\RewardController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'lessons'], function () {
    Route::get('/', [LessonController::class, 'index']);
    Route::get('/{id}', [LessonController::class, 'get']);
});

Route::group(['prefix' => 'rewards'], function () {
    Route::get('/', [RewardController::class, 'index']);
    Route::get('/getByType', [RewardController::class, 'getByType']);
});
