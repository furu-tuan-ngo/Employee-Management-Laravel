<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KhenThuong extends Model
{
    protected $table = 'khen_thuong';

    public function ctKhenThuong()
    {
        return $this->hasMany('App\Models\CtKhenThuong', 'ma_khen_thuong', 'id');
    }
}
