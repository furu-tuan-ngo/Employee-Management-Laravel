<?php

namespace App\Http\Controllers;

use App\Services\DanTocService;
use Illuminate\Http\Request;

class DanTocController extends Controller
{

    protected $danTocService ;

    function __construct(DanTocService $danTocService)
    {
        $this->danTocService = $danTocService;
    }

    public function index()
    {
        try {
            $record = $this->danTocService->getAll();
            return $this->_getDataResponse($record);
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }

    public function save(Request $request)
    {
        try {
            $record = collect($request);
            $result = $this->danTocService->saveOne($record);
            return $this->_getDataResponse($result);
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }
}
