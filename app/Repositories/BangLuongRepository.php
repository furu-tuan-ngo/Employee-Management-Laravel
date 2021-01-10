<?php

namespace App\Repositories;

use App\Models\BangLuong;

class BangLuongRepository extends BaseRepository
{
    function __construct(BangLuong $bangLuong)
    {
        $this->model = $bangLuong;
    }

    public function getBangLuongsContainNhanVien($filter)
    {
        return $this->model->with('nhan_vien', 'phong_ban')->where(
            [
                ['nam', '=', $filter->year],
                ['thang', '=', $filter->month]
            ]
        )->latest()->get();
    }
}
