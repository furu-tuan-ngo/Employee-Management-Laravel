<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PhongBan extends Model
{
    protected $table = 'phong_ban';

    public function bang_luong()
    {
        return $this->hasOne('App\Models\BangLuong');
    }

    public function nhan_viens()
    {
        return $this->HasMany("App\Models\NhanVien","ma_phong_ban","id");
    }


}
