<?php

namespace App\Http\Controllers;

use App\Services\PhongBanService;
use Illuminate\Http\Request;

class PhongBanController extends Controller
{
    protected $phongBanService;

    function __construct(PhongBanService $phongBanService)
    {
        $this->phongBanService = $phongBanService;
    }

    public function index()
    {
        try {
            $record = $this->phongBanService->getAll();
            return $this->_getDataResponse($record);
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }

    public function save(Request $request)
    {
        try {
            $record = collect($request);
            $result = $this->phongBanService->saveOne($record);
            return $this->_getDataResponse($result);
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }
}
