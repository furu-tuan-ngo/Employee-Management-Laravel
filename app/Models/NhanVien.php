<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NhanVien extends Model
{

    protected $table = 'nhan_vien';

    protected $casts = [
        'ngay_vao_lam' => 'datetime',
    ];

    public function bang_luong()
    {
        return $this->hasOne('App\Models\BangLuong');
    }
}
