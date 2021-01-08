<?php

namespace App\Services;

use App\Repositories\CtNgoaiNguRepository;

class CtNgoaiNguService
{
    protected $ctNgoaiNguRepository;

    function __construct(CtNgoaiNguRepository $ctNgoaiNguRepository)
    {
        $this->ctNgoaiNguRepository = $ctNgoaiNguRepository;
    }

    public function save($record)
    {
        $id = $this->ctNgoaiNguRepository->insert($record);
        if ($id == null) {
            throw new \Exception("Fail to insert record");
        }
        return $record->put('id', $id);
    }
}
