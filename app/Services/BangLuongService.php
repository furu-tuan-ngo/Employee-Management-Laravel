<?php

namespace App\Services;

use App\Repositories\BangLuongRepository;
use App\Repositories\NhanVienRepository;
use App\Repositories\PhongBanRepository;

class BangLuongService
{
    protected $bangLuongRepository;
    protected $nhanVienRepository;
    protected $phongBanRepository;
    function __construct(
        BangLuongRepository $bangLuongRepository,
        NhanVienRepository $nhanVienRepository,
        PhongBanRepository $phongBanRepository
    ) {
        $this->bangLuongRepository = $bangLuongRepository;
        $this->phongBanRepository = $phongBanRepository;
        $this->nhanVienRepository = $nhanVienRepository;
    }

    public function getBangLuongs($filter)
    {
        return $this->bangLuongRepository->getBangLuongsContainNhanVien($filter);
    }

    public function getLookupValues()
    {
        $lookupValues = collect([]);
        $lookupValues->put('nhan_vien', $this->nhanVienRepository->all());
        $lookupValues->put('phong_ban', $this->phongBanRepository->all());

        return $lookupValues;
    }
    public function saveBangLuong($record)
    {
        return $this->bangLuongRepository->insert($record);
    }

    public function getOne($id)
    {
        return $this->bangLuongRepository->find($id);
    }

    public function update($record)
    {
        return $this->bangLuongRepository->update(collect($record), $record->id);
    }
    public function delete($id)
    {
        return $this->bangLuongRepository->delete($id);
    }
}
