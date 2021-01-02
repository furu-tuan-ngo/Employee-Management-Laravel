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


Route::post('logout/{tokenId}', 'AuthenticationController@logout');
Route::post('login', 'AuthenticationController@login');
Route::post("register", "AuthenticationController@register");

Route::middleware('auth:api')->group(function () {
    Route::get("profile", "UserController@index");
    // Nhan Vien Api
    Route::get("nhanviens", "NhanVienController@index");
    Route::get("nhanvien/{id}", "NhanVienController@detail");
    Route::post("nhanvien/add", "NhanVienController@save");
    // Bang Luong Api
    Route::get('bangluongs', "BangLuongController@index");
});
