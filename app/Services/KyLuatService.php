<?php

namespace App\Services;

use App\Repositories\KyLuatRepository;

class KyLuatService
{
    protected $kyLuatRepository;

    function __construct(KyLuatRepository $kyLuatRepository)
    {
        $this->kyLuatRepository = $kyLuatRepository;
    }
}
