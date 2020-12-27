<?php

namespace App\Repositories;

use App\Models\NgoaiNgu;

class NgoaiNguRepository extends BaseRepository
{
    function __construct(NgoaiNgu $ngoaiNgu)
    {
        $this->model = $ngoaiNgu;
    }
}
