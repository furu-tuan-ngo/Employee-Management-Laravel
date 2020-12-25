<?php

namespace App\Repositories;

use App\models\NhanVien;

class NhanVienRepository extends BaseRepository
{

    function __construct(NhanVien $nhanVien)
    {
        $this->model = $nhanVien;
    }
}
