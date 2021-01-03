<?php

namespace App\Http\Controllers;

use App\Services\ChucVuService;
use Illuminate\Http\Request;

class ChucVuController extends Controller
{
    protected $chucVuService;

    function __construct(ChucVuService $chucVuService)
    {
        $this->chucVuService = $chucVuService;
    }

    public function index()
    {
        try {
            $record = $this->chucVuService->getAll();
            return $this->_getDataResponse($record);
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }

    public function save(Request $request)
    {
        try {
            $record = collect($request);
            $result = $this->chucVuService->saveOne($record);
            return $this->_getDataResponse($result);
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }
}
