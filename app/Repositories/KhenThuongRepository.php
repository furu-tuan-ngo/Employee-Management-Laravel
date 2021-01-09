<?php

namespace App\Repositories;

use App\Models\KhenThuong;

class KhenThuongRepository extends BaseRepository
{
    function __construct(KhenThuong $khenThuong)
    {
        $this->model = $khenThuong;
    }

    public function getKhenThuong($id)
    {
        return $this->model->with("ctKhenThuong.nhanvien")->find($id);
    }
}
