<?php

namespace App\Http\Controllers;

use App\Models\CtKyLuat;
use Illuminate\Http\Request;
use App\Services\KyLuatService;
use App\Services\CtKyLuatService;
use App\Services\UserService;
use KyLuat;

class KyLuatController extends Controller
{
    protected $kyLuatService;
    protected $ctKyLuatService;
    protected $userService;

    function __construct(KyLuatService $kyLuatService, CtKyLuatService $ctKyLuatService, UserService $userService)
    {
        $this->kyLuatService = $kyLuatService;
        $this->ctKyLuatService = $ctKyLuatService;
        $this->userService = $userService;
    }

    public function index()
    {
        try {
            return $this->_getDataResponse($this->kyLuatService->getAll());
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }

    public function detail(Request $request, $id)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                $kyLuat = $this->kyLuatService->getKyLuat($id);
                return $this->_getDataResponse($kyLuat);
            } catch (\Exception $e) {
                return $this->_getMessageResponse($e->getMessage());
            }
        }
        return $this->_authorize();
    }

    public function delete(Request $request, $id)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                $result = $this->kyLuatService->deleteKyLuat($id); // Return Id of new
                return $this->_getDataResponse($result);
            } catch (\Exception $e) {
                return response()->json([
                    "success" => false,
                    "message" => $e->getMessage()
                ]);
            }
        }
        return $this->_authorize();
    }

    public function update(Request $request)
    {
        try {
            $result = $this->kyLuatService->updateKyLuat(collect($request));
            return $this->_getDataResponse($result);
        } catch (\Exception $e) {
            return response()->json([
                "success" => false,
                "message" => $e->getMessage()
            ]);
        }
    }

    public function save(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                return $this->_getDataResponse($this->kyLuatService->saveKyLuat(collect($request))); // Return Id of new
            } catch (\Exception $e) {
                return response()->json([
                    "success" => false,
                    "message" => $e->getMessage()
                ]);
            }
        }
        return $this->_authorize();
    }

    public function saveChiTiet(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                return $this->_getDataResponse($this->kyLuatService->saveChiTiet(collect($request))); // Return Id of new
            } catch (\Exception $e) {
                return response()->json([
                    "success" => false,
                    "message" => $e->getMessage()
                ]);
            }
        }
        return $this->_authorize();
    }
}
