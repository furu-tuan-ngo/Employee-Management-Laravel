<?php

namespace App\Services;

use App\Repositories\ChucVuRepository;
use App\Repositories\DanTocRepository;
use App\Repositories\NhanVienRepository;
use App\Repositories\PhongBanRepository;
use App\Repositories\TonGiaoRepository;
use Illuminate\Support\Carbon;

class NhanVienService
{
    protected $nhanVienRepository;
    protected $phongBanRepository;
    protected $chucVuRepository;
    protected $danTocRepository;
    protected $tonGiaoRepository;

    function __construct(
        NhanVienRepository $nhanVienRepository,
        PhongBanRepository $phongBanRepository,
        ChucVuRepository $chucVuRepository,
        DanTocRepository $danTocRepository,
        TonGiaoRepository $tonGiaoRepository
    ) {
        $this->nhanVienRepository = $nhanVienRepository;
        $this->phongBanRepository = $phongBanRepository;
        $this->chucVuRepository = $chucVuRepository;
        $this->danTocRepository = $danTocRepository;
        $this->tonGiaoRepository = $tonGiaoRepository;
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
        $record['ngay_sinh'] = Carbon::parse($record['ngay_sinh'])->format('Y-m-d h:i:s');
        $record['ngay_vao_lam'] = Carbon::parse($record['ngay_vao_lam'])->format('Y-m-d h:i:s');
        return $this->nhanVienRepository->insert($record);
    }

    public function getLookupValue()
    {
        $lookupValue = collect([]);

        $lookupValue->put("phong_ban", $this->phongBanRepository->all());
        $lookupValue->put("chuc_vu", $this->chucVuRepository->all());
        $lookupValue->put("dan_toc", $this->danTocRepository->all());
        $lookupValue->put("ton_giao", $this->tonGiaoRepository->all());

        return $lookupValue;
    }
}
