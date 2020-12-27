<?php

namespace App\Services;

use App\Repositories\PhongBanRepository;

class PhongBanService
{
    protected $phongBanRepository;

    function __construct(PhongBanRepository $phongBanRepository)
    {
        $this->phongBanRepository = $phongBanRepository;
    }
}
