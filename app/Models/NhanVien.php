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
        return $this->hasOne('App\Models\BangLuong','ma_nhan_vien','id');
    }

    public function dan_toc()
    {
        return $this->belongsTo('App\Models\DanToc','ma_dan_toc','id');
    }

    public function ton_giao()
    {
        return $this->belongsTo('App\Models\TonGiao','ma_ton_giao','id');
    }

    public function phong_ban()
    {
        return $this->belongsTo('App\Models\PhongBan','ma_phong_ban','id');
    }

    public function chuc_vu()
    {
        return $this->belongsTo('App\Models\ChucVu','ma_chuc_vu','id');
    }
}
