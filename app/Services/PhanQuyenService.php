<?php
namespace App\Services;

use App\Repositories\PhanQuyenRepository;

class PhanQuyenService
{
    protected $phanQuyenRepository;

    function __construct(PhanQuyenRepository $phanQuyenRepository)
    {
        $this->phanQuyenRepository = $phanQuyenRepository;
    }
}
