<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhongBan extends Model
{
    public function bang_luong()
    {
        return $this->hasOne('App\Models\BangLuong');
    }
}
