<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Expr\FuncCall;

class CtKhenThuong extends Model
{
    protected $table = 'c_t_khen_thuong';

    public function khen_thuong()
    {
        return $this->belongsTo('App\models\KhenThuong', 'ma_khen_thuong', "id");
    }
    public function nhanvien()
    {
        return $this->belongsTo('App\Models\NhanVien', 'ma_nhan_vien', 'id');
    }
}
