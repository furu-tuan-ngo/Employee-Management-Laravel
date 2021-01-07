<?php

namespace App\Repositories;

use App\Models\CtTrinhDo;

class CtTrinhDoRepository extends BaseRepository
{
    function __construct(CtTrinhDo $ctTrinhDo)
    {
        $this->model = $ctTrinhDo;
    }
}
