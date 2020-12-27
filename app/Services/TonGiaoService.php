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
}
