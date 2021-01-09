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
        return $this->hasOne('App\Models\BangLuong', 'ma_nhan_vien', 'id');
    }

    public function dan_toc()
    {
        return $this->belongsTo('App\Models\DanToc', 'ma_dan_toc', 'id');
    }

    public function ton_giao()
    {
        return $this->belongsTo('App\Models\TonGiao', 'ma_ton_giao', 'id');
    }

    public function phong_ban()
    {
        return $this->belongsTo('App\Models\PhongBan', 'ma_phong_ban', 'id');
    }

    public function chuc_vu()
    {
        return $this->belongsTo('App\Models\ChucVu', 'ma_chuc_vu', 'id');
    }

    public function trinh_do()
    {
        return $this->belongsToMany('App\Models\TrinhDo', 'c_t_trinh_do', 'ma_nhan_vien', 'ma_trinh_do');
    }

    public function ngoai_ngu()
    {
        return $this->belongsToMany('App\Models\NgoaiNgu', 'c_t_ngoai_ngu', "ma_ngoai_ngu", "id");
    }

    public function khen_thuong()
    {
        return $this->belongsToMany('App\Models\KhenThuong', 'c_t_khen_thuong', "ma_khen_thuong", "id");
    }

    public function ky_luat()
    {
        return $this->belongsToMany('App\Models\KyLuat', 'c_t_ky_luat', "ma_ky_luat", "id");
    }

    public function ct_khen_thuong()
    {
        return $this->hasMany('App\Models\CtKhenThuong', 'ma_nhan_vien', 'id');
    }

    public function ct_ky_luat()
    {
        return $this->hasMany('App\Models\CtKyLuat', 'ma_nhan_vien', 'id');
    }
}
