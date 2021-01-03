<?php

namespace App\Services;

use App\Repositories\TonGiaoRepository;

class TonGiaoService
{
    protected $tonGiaoRepository;

    function __construct(TonGiaoRepository $tonGiaoRepository)
    {
        $this->tonGiaoRepository = $tonGiaoRepository;
    }

    public function getAll()
    {
        return $this->tonGiaoRepository->all();
    }

    public function saveOne($record)
    {
        $id = $this->tonGiaoRepository->insert($record);
        if ($id == null) {
            throw new \Exception("Fail to insert record");
        }
        return $record->put('id', $id);
    }
}
