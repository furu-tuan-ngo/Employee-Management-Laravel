<?php

namespace App\Repositories;

use App\Models\TrinhDo;

class TrinhDoRepository extends BaseRepository
{
    function __construct(TrinhDo $trinhDo)
    {
        $this->model = $trinhDo;
    }
}
