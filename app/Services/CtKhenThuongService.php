<?php

namespace App\Services;

use App\Repositories\CtKhenThuongRepository;

class CtKhenThuongService
{
    protected $ctKhenThuongRepository;

    function __construct(CtKhenThuongRepository $ctKhenThuongRepository)
    {
        $this->ctKhenThuongRepository = $ctKhenThuongRepository;
    }

    public function save($record)
    {
        $id = $this->ctKhenThuongRepository->insert($record);
        if ($id == null) {
            throw new \Exception("Fail to insert record");
        }
        return $record->put('id', $id);
    }
}
