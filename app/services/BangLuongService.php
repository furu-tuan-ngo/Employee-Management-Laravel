<?php

namespace App\Services;

use App\Repositories\BangLuongRepository;

class BangLuongService
{
    protected $bangLuongRepository;

    function __construct(BangLuongRepository $bangLuongRepository)
    {
        $this->bangLuongRepository = $bangLuongRepository;
    }

    public function getBangLuongs($relations = '')
    {
        return $this->bangLuongRepository->getBangLuongsContainNhanVien();
    }
}
