<?php

namespace App\Repositories;

use App\Models\HopDong;

class HopDongRepository extends BaseRepository
{
    function __construct(HopDong $hopDong)
    {
        $this->model = $hopDong;
    }
}
