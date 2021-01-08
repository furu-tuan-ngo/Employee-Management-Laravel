<?php

namespace App\Repositories;

use App\Models\CtKyLuat;

class CtKyLuatRepository extends BaseRepository
{
    function __construct(CtKyLuat $ctKyLuat)
    {
        $this->model = $ctKyLuat;
    }
}
