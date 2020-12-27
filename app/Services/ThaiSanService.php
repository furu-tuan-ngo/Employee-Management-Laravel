<?php

namespace App\Services;

use App\Repositories\ThaiSanRepository;

class ThaiSanService
{
    protected $thaiSanRepository;

    function __construct(ThaiSanRepository $thaiSanRepository)
    {
        $this->thaiSanRepository = $thaiSanRepository;
    }
}
