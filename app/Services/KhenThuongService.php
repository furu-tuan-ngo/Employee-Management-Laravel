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
    public function getAll()
    {
        return $this->khenThuongRepository->all();
    }
}
