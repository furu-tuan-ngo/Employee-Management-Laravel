<?php

namespace App\Repositories;

use App\Models\CtKyLuat;

class CtKyLuatRepository extends BaseRepository
{
    function __construct(CtKyLuat $ctKyLuat)
    {
        $this->model = $ctKyLuat;
    }

    public function getOneWithKyLuat($id)
    {
        return $this->model->with('ky_luat')->find($id);
    }
}
