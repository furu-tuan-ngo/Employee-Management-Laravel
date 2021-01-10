<?php

namespace App\Services;

use App\Repositories\CtKhenThuongRepository;
use App\Repositories\KhenThuongRepository;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class KhenThuongService
{
    protected $khenThuongRepository;
    protected $ctKhenThuongRepository;
    function __construct(KhenThuongRepository $khenThuongRepository, CtKhenThuongRepository $ctKhenThuongRepository)
    {
        $this->khenThuongRepository = $khenThuongRepository;
        $this->ctKhenThuongRepository = $ctKhenThuongRepository;
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

    public function saveChiTiet($record)
    {
        $record['ngay_qd'] = Carbon::parse($record['ngay_qd'])->format('Y-m-d h:i:s');
        $id = $this->ctKhenThuongRepository->insert(collect($record));
        if ($id != null) {
            return $this->ctKhenThuongRepository->getOneWithKhenThuong($id);
        }
    }
}
