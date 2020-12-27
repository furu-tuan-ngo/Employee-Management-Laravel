<?php

namespace App\Repositories;

use App\Models\ThaiSan;

class ThaiSanRepository extends BaseRepository
{
    function __construct(ThaiSan $thaiSan)
    {
        $this->model = $thaiSan;
    }
}
