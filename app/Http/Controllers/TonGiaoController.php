<?php

namespace App\Http\Controllers;

use App\Services\TonGiaoService;
use Illuminate\Http\Request;

class TonGiaoController extends Controller
{
    protected $tonGiaoService;

    function __construct(TonGiaoService $tonGiaoService)
    {
        $this->tonGiaoService = $tonGiaoService;
    }

    public function index()
    {
        try {
            $record = $this->tonGiaoService->getAll();
            return $this->_getDataResponse($record);
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }

    public function save(Request $request)
    {
        try {
            $record = collect($request);
            $result = $this->tonGiaoService->saveOne($record);
            return $this->_getDataResponse($result);
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }
}
