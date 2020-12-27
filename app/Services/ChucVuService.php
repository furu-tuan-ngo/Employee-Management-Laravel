<?php

namespace App\Services;

use App\Repositories\ChucVuRepository;

class ChucVuService
{
    protected $chucVuRepository;

    function __construct(ChucVuRepository $chucVuRepository)
    {
        $this->chucVuRepository = $chucVuRepository;
    }
}
