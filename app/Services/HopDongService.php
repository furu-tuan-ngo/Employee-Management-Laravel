<?php

namespace App\Services;

use App\Repositories\HopDongRepository;

class HopDongService
{
    protected $hopDongRepository;

    function __construct(HopDongRepository $hopDongRepository)
    {
        $this->hopDongRepository = $hopDongRepository;
    }
    public function getAll()
    {
        return $this->hopDongRepository->all();
    }
}
