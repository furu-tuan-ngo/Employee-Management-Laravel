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
}
