<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KyLuat extends Model
{
    protected $table = 'ky_luat';

    public function ctKyLuat()
    {
        return $this->hasMany('App\Models\CtKyLuat', 'ma_ky_luat', 'id');
    }
}
