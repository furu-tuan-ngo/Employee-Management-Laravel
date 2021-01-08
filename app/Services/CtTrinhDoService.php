<?php

namespace App\Services;

use App\Repositories\CtTrinhDoRepository;

class CtTrinhDoService
{
    protected $ctTrinhDoRepository;

    function __construct(CtTrinhDoRepository $ctTrinhDoRepository)
    {
        $this->ctTrinhDoRepository = $ctTrinhDoRepository;
    }

    public function save($record)
    {
        $id = $this->ctTrinhDoRepository->insert($record);
        if ($id == null) {
            throw new \Exception("Fail to insert record");
        }
        return $record->put('id', $id);
    }
}
