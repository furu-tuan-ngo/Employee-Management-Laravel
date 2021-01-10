<?php

namespace App\Services;

use App\Repositories\KhenThuongRepository;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class KhenThuongService
{
    protected $khenThuongRepository;

    function __construct(KhenThuongRepository $khenThuongRepository)
    {
        $this->khenThuongRepository = $khenThuongRepository;
    }

    public function getAll()
    {
        return $this->khenThuongRepository->all();
    }

    public function getKhenThuong($id)
    {
        return $this->khenThuongRepository->getKhenThuong($id);
    }

    public function deleteKhenThuong($id)
    {
        return $this->khenThuongRepository->delete($id);
    }

    public function updateKhenThuong($record)
    {
        $record['created_at'] = Carbon::yesterday();
        $record['updated_at'] = Carbon::now();
        return $this->khenThuongRepository->update($record, $record['id']);
    }

    public function saveKhenThuong($record)
    {
        $record->put('created_at', date('Y-m-d h:i:s'));
        $record->put('updated_at', date('Y-m-d h:i:s'));
        return DB::table('khen_thuong')->insertGetId(
            $record->all()
        );
    }
}
