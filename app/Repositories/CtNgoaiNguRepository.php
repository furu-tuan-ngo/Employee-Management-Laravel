<?php

namespace App\Repositories;

use App\Models\CtNgoaiNgu;

class CtNgoaiNguRepository extends BaseRepository
{
    function __construct(CtNgoaiNgu $ctNgoaiNgu)
    {
        $this->model = $ctNgoaiNgu;
    }
}
