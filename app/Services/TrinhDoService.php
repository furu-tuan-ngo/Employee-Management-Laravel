<?php

namespace App\Services;

use App\Repositories\TrinhDoRepository;

class TrinhDoService
{
    protected $trinhDoRepository;

    function __construct(TrinhDoRepository $trinhDoRepository)
    {
        $this->trinhDoRepository = $trinhDoRepository;
    }
}
