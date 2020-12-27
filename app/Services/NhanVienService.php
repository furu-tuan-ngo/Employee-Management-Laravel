<?php

namespace App\Services;

use App\Repositories\NhanVienRepository;

class NhanVienService
{
    protected $nhanVienRepository;

    function __construct(NhanVienRepository $nhanVienRepository)
    {
        $this->nhanVienRepository = $nhanVienRepository;
    }

    public function getNhanViens()
    {
        return $this->nhanVienRepository->getNhanViens();
    }

    public function getNhanVien($id)
    {
        return $this->nhanVienRepository->getNhanVien($id);
    }

    public function saveNhanVien($record)
    {
        return $this->nhanVienRepository->insert($record);
    }
}
