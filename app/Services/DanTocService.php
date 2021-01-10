<?php

namespace App\Services;

use App\Repositories\DanTocRepository;

class DanTocService
{
    protected $danTocRepository;

    function __construct(DanTocRepository $danTocRepository)
    {
        $this->danTocRepository = $danTocRepository;
    }

    public function getAll()
    {
        return $this->danTocRepository->all();
    }

    public function saveOne($record)
    {
        $id = $this->danTocRepository->insert($record);
        if ($id == null) {
            throw new \Exception("Fail to insert record");
        }
        return $record->put('id', $id);
    }

    public function delete($id)
    {
        return $this->danTocRepository->delete($id);
    }

    public function getOne($id)
    {
        return $this->danTocRepository->find($id);
    }

    public function update($record)
    {
        return $this->danTocRepository->update(collect($record), $record->id);
    }
}
