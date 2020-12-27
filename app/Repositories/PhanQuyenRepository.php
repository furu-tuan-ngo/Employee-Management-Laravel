<?php

namespace App\Repositories;

use App\Models\PhanQuyen;

class PhanQuyenRepository extends BaseRepository
{
    function __construct(PhanQuyen $phanQuyen)
    {
        $this->model = $phanQuyen;
    }
}
