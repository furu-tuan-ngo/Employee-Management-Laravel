<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\HopDongService;

class HopDongController extends Controller
{
    protected $hopDongService;

    function __construct(HopDongService $hopDongService)
    {
        $this->hopDongService = $hopDongService;
    }

    public function index()
    {
        try {
            $record = $this->hopDongService->getAll();
            return $this->_getDataResponse($record);
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }

    public function save(Request $request)
    {
        try {
            $record = collect($request);
            $result = $this->hopDongService->saveOne($record);
            return $this->_getDataResponse($result);
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }
}
