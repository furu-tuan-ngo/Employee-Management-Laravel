<?php

namespace App\Services;

use App\Repositories\ChucVuRepository;

class ChucVuService
{
    protected $chucVuRepository;

    function __construct(ChucVuRepository $chucVuRepository)
    {
        $this->chucVuRepository = $chucVuRepository;
    }

    public function getAll (){
        return $this->chucVuRepository->all();
    }
    public function saveOne($record)
    {
        $id = $this->chucVuRepository->insert($record);
        if ($id == null) {
            throw new \Exception("Fail to insert record");
        }
        return $record->put('id', $id);
    }
}
