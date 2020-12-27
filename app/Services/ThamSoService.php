<?php

namespace App\Services;

use App\Repositories\ThamSoRepository;

class ThamSoService
{
    protected $thamSoRepository;

    function __construct(ThamSoRepository $thamSoRepository)
    {
        $this->thamSoRepository = $thamSoRepository;
    }
}
