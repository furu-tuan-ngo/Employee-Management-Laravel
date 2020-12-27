<?php

namespace App\Repositories;

use App\Models\PhongBan;

class PhongBanRepository extends BaseRepository
{
    function __construct(PhongBan $phongBan)
    {
        $this->model = $phongBan;
    }
}
