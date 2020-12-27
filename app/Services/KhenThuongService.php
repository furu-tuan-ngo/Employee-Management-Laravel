<?php

namespace App\Services;

use App\Repositories\KhenThuongRepository;

class khenThuongService
{
    protected $khenThuongRepository;

    function __construct(KhenThuongRepository $khenThuongRepository)
    {
        $this->khenThuongRepository = $khenThuongRepository;
    }
}
