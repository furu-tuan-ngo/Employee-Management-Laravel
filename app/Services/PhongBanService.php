<?php

namespace App\Services;

use App\Repositories\PhongBanRepository;

class PhongBanService
{
    protected $phongBanRepository;

    function __construct(PhongBanRepository $phongBanRepository)
    {
        $this->phongBanRepository = $phongBanRepository;
    }

    public function getAll()
    {
        return $this->phongBanRepository->all();
    }

    public function saveOne($record)
    {
        $id = $this->phongBanRepository->insert($record);
        if ($id == null) {
            throw new \Exception("Fail to insert record");
        }
        return $record->put('id', $id);
    }

    public function delete($id)
    {
        return $this->phongBanRepository->delete($id);
    }

    public function getOne($id)
    {
        return $this->phongBanRepository->find($id);
    }

    public function update($record)
    {
        return $this->phongBanRepository->update(collect($record), $record->id);
    }
}
