<?php

namespace App\Services;

use App\Repositories\KyLuatRepository;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class KyLuatService
{
    protected $kyLuatRepository;

    function __construct(KyLuatRepository $kyLuatRepository)
    {
        $this->kyLuatRepository = $kyLuatRepository;
    }

    public function getAll()
    {
        return $this->kyLuatRepository->all();
    }

    public function getKyLuat($id)
    {
        return $this->kyLuatRepository->getKyLuat($id);
    }

    public function deleteKyLuat($id)
    {
        return $this->kyLuatRepository->delete($id);
    }

    public function updateKyLuat($record)
    {
        $record['created_at'] = Carbon::yesterday();
        $record['updated_at'] = Carbon::now();
        return $this->kyLuatRepository->update($record, $record['id']);
    }

    public function saveKyLuat($record)
    {
        $record->put('created_at', date('Y-m-d h:i:s'));
        $record->put('updated_at', date('Y-m-d h:i:s'));
        return DB::table('ky_luat')->insertGetId(
            $record->all()
        );
    }
}
