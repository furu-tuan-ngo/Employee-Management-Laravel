<?php

namespace App\Repositories;

use App\Models\NhanVien;

class NhanVienRepository extends BaseRepository
{

    function __construct(NhanVien $nhanVien)
    {
        $this->model = $nhanVien;
    }

    public function getNhanViens()
    {
        return $this->model->with("phong_ban", "bang_luong", "chuc_vu", "dan_toc", "ton_giao")->latest()->get();
    }

    public function getNhanVien($id)
    {
        return $this->model->with("phong_ban", "bang_luong", "chuc_vu", "dan_toc", "ton_giao")->find($id);
    }
}
