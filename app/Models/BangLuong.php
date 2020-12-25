<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BangLuong extends Model
{
    protected $table = 'bang_luong';

    public function nhan_vien()
    {
        return $this->belongsTo('App\Models\NhanVien','ma_nhan_vien','id');
    }

    public function phong_ban()
    {
        return $this->belongsTo('App\Models\PhongBan');
    }
}
