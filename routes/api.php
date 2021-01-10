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
    Route::post('nhanvien/kyluat', "NhanVienController@setKyLuat");
    Route::post('nhanvien/khenthuong', "NhanVienController@setKhenThuong");
    Route::post('nhanvien/ngoaingu', 'NhanVienController@setNgoaiNgu');
    Route::post('nhanvien/trinhdo', 'NhanVienController@setTrinhDo');
    Route::get("lookup-value-nhan-vien", "NhanVienController@lookupValue");
    Route::post("nhanvien/add", "NhanVienController@save");
    Route::post("nhanvien/update", "NhanVienController@update");
    Route::delete("nhanvien/remove/{id}", 'NhanVienController@delete');
    Route::get("nhanvien/{id}", "NhanVienController@detail");


    // Bang Luong Api
    Route::get('bangluongs', "BangLuongController@index");
    Route::get('bang-luong-lookup-values', 'BangLuongController@getLookupValues');
    Route::post('bangluong/add', "BangLuongController@save");
    Route::post('bangluong/update/', "BangLuongController@update");
    Route::delete('bangluong/remove/{id}', "BangLuongController@delete");
    Route::get('bangluong/{id}', "BangLuongController@getOne");


    // Ton Giao
    Route::get('tongiaos', "TonGiaoController@index");
    Route::post('tongiaos', "TonGiaoController@save");
    Route::get('tongiao/{id}', "TonGiaoController@getOne");
    Route::delete('tongiao/remove/{id}', "TonGiaoController@delete");
    Route::post('tongiao/update/', "TonGiaoController@update");

    // Phong Ban
    Route::get('phongbans', "PhongBanController@index");
    Route::post('phongbans', "PhongBanController@save");
    Route::get('phongban/{id}', "PhongBanController@getOne");
    Route::delete('phongban/remove/{id}', "PhongBanController@delete");
    Route::post('phongban/update/', "PhongBanController@update");

    //Chuc vu
    Route::get('chucvus', 'ChucVuController@index');
    Route::post('chucvus', "ChucVuController@save");
    Route::get('chucvu/{id}', "ChucVuController@getOne");
    Route::delete('chucvu/remove/{id}', "ChucVuController@delete");
    Route::post('chucvu/update/', "ChucVuController@update");

    //Dan toc
    Route::get('dantocs', "DanTocController@index");
    Route::post('dantocs', "DanTocController@save");
    Route::get('dantoc/{id}', "DanTocController@getOne");
    Route::delete('dantoc/remove/{id}', "DanTocController@delete");
    Route::post('dantoc/update/', "DanTocController@update");

    /**
     *  Hop Dong api
     */
    Route::get('hopdongs', 'HopDongController@index');
    Route::post('hopdongs', 'HopDongController@save');

    /**
     * Khen Thuong api
     */
    Route::get('khenthuongs', "KhenThuongController@index");
    Route::get('khenthuong/{id}', "KhenThuongController@detail");
    Route::delete('khenthuong/remove/{id}', "KhenThuongController@delete");
    Route::post('khenthuong/update', "KhenThuongController@update");
    Route::post('khenthuongs', "KhenThuongController@save");

    /**
     * Ky Luat api
     */
    Route::get('kyluats', "KyLuatController@index");
    Route::get('kyluat/{id}', "KyLuatController@detail");
    Route::delete('kyluat/remove/{id}', "KyLuatController@delete");
    Route::post('kyluat/update', "KyLuatController@update");
    Route::post('kyluats', "KyLuatController@save");

    Route::post('ct-ky-luat', "KyLuatController@saveChitiet");
    Route::post('ct-khen-thuong', "KhenThuongController@saveChitiet");
});
