<?php

use Illuminate\Http\Request;

Route::group([

    'namespace' => 'App\Http\Controllers',
    'prefix' => 'auth'

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

use Illuminate\Support\Facades\Route;
