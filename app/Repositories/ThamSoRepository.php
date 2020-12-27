<?php

namespace App\Repositories;

use App\Models\ThamSo;

class ThamSoRepository extends BaseRepository
{
    function __construct(ThamSo $thamSo)
    {
        $this->model = $thamSo;
    }
}
