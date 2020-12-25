<?php

namespace App\Repositories;

use App\models\BangLuong;

class BangLuongRepository extends BaseRepository
{
    function __construct(BangLuong $bangLuong)
    {
        $this->model = $bangLuong;
    }

    public function getBangLuongsContainNhanVien()
    {
        return $this->model->with('nhan_vien')->latest()->get();
    }
}
