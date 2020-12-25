<?php
namespace App\Services;

use App\models\NhanVien;

class NhanVienService {
    protected $nhanVienRepository;

    function __construct(NhanVien $nhanVien)
    {
        $this->nhanVienRepository = $nhanVien;
    }

    public function getNhanViens ()
    {
        return $this->nhanVienRepository->all();
    }
}
