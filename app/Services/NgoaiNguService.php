<?php

namespace App\Services;

use App\Repositories\NgoaiNguRepository;

class NgoaiNguService
{
    protected $ngoaiNguRepository;

    function __construct(NgoaiNguRepository $ngoaiNguRepository)
    {
        $this->ngoaiNguRepository = $ngoaiNguRepository;
    }
}
