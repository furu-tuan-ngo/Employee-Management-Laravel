<?php

namespace App\Repositories;

use App\Models\CtKhenThuong;

class CtKhenThuongRepository extends BaseRepository
{
    function __construct(CtKhenThuong $ctKhenThuong)
    {
        $this->model = $ctKhenThuong;
    }

    public function getOneWithKhenThuong($id)
    {
        return $this->model->with('khen_thuong')->find($id);
    }
}
