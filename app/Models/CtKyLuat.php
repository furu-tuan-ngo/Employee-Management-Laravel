<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CtKyLuat extends Model
{
    protected $table = 'c_t_ky_luat';

    public function ky_luat()
    {
        return $this->belongsTo('App\Models\KhenThuong', 'ma_ky_luat', 'id');
    }
}
