<?php

namespace App\Repositories;

use App\Models\KyLuat;

class KyLuatRepository extends BaseRepository
{
    function __construct(KyLuat $kyLuat)
    {
        $this->model = $kyLuat;
    }

    public function getKyLuat($id)
    {
        return $this->model->with("ctKyLuat.nhanvien")->find($id);
    }
}
