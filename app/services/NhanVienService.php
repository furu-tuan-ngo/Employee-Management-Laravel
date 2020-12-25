<?php
namespace App\Services;

use App\Repositories\NhanVienRepository;

class NhanVienService {
    protected $nhanVienRepository;

    function __construct(NhanVienRepository $nhanVienRepository)
    {
        $this->nhanVienRepository = $nhanVienRepository;
    }

    public function getNhanViens ()
    {
        return $this->nhanVienRepository->all();
    }
}
