<?php

namespace App\Services;

use App\Repositories\CtKyLuatRepository;

class CtKyLuatService
{
    protected $ctKyLuatRepository;

    function __construct(CtKyLuatRepository $ctKyLuatRepository)
    {
        $this->ctKyLuatRepository = $ctKyLuatRepository;
    }

    public function save($record)
    {
        $id = $this->ctKyLuatRepository->insert($record);
        if ($id == null) {
            throw new \Exception("Fail to insert record");
        }
        return $record->put('id', $id);
    }

    public function delete($id)
    {
        return $this->ctKyLuatRepository->delete($id);
    }
}
