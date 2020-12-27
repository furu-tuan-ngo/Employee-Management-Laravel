<?php

namespace App\Repositories;

use App\Models\TonGiao;

class TonGiaoRepository extends BaseRepository
{
    function __construct(TonGiao $tonGiao)
    {
        $this->model = $tonGiao;
    }
}
