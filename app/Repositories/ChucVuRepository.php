<?php

namespace App\Repositories;

use App\Models\ChucVu;

class ChucVuRepository extends BaseRepository
{
    function __construct(ChucVu $chucVu)
    {
        $this->model = $chucVu;
    }
}
