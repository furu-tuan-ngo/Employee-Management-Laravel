<?php

namespace App\Repositories;

use App\Models\DanToc;

class DanTocRepository extends BaseRepository
{
    function __construct(DanToc $danToc)
    {
        $this->model = $danToc;
    }
}
