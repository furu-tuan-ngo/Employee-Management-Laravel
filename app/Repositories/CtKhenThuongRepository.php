<?php

namespace App\Repositories;

use App\Models\CtKhenThuong;

class CtKhenThuongRepository extends BaseRepository
{
    function __construct(CtKhenThuong $ctKhenThuong)
    {
        $this->model = $ctKhenThuong;
    }
}
