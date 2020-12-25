<?php

namespace App\Repositories;

use App\Models\NhanVien;

class NhanVienRepository extends BaseRepository
{

    function __construct(NhanVien $nhanVien)
    {
        $this->model = $nhanVien;
    }
}
