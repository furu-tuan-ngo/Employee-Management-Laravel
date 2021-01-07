<?php

namespace App\Http\Controllers;

use App\Services\NhanVienService;
use App\Services\UserService;
use Illuminate\Http\Request;

class NhanVienController extends Controller
{
    protected $nhanVienService;
    protected $userService;

    function __construct(
        NhanVienService $nhanVienService,
        UserService $userService
    ) {
        $this->nhanVienService = $nhanVienService;
        $this->userService = $userService;
    }

    public function index(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                $nhanViens = $this->nhanVienService->getNhanViens();

                return $this->_getDataResponse($nhanViens);
            } catch (\Exception $e) {
                return $this->_getMessageResponse($e->getMessage());
            }
        }

        return $this->_authorize();
    }

    public function detail(Request $request, $id)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                $nhanVien = $this->nhanVienService->getNhanVien($id);
                return $this->_getDataResponse($nhanVien);
            } catch (\Exception $e) {
                return $this->_getMessageResponse($e->getMessage());
            }
        }
        return $this->_authorize();
    }

    public function save(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                return $this->_getDataResponse($this->nhanVienService->saveNhanVien(collect($request))); // Return Id of new
            } catch (\Exception $e) {
                return response()->json([
                    "success" => false,
                    "message" => $e->getMessage()
                ]);
            }
        }
        return $this->_authorize();
    }

    public function lookupValue(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                $result = $this->nhanVienService->getLookupValue(); // Return Id of new
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

    public function delete(Request $request, $id)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                $result = $this->nhanVienService->deleteNhanVien($id); // Return Id of new
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
        // return $request;
        try {
            // Ignore validate request
            $result = $this->nhanVienService->updateNhanVien(collect($request)); // Return Id of new
            return $this->_getDataResponse($result);
        } catch (\Exception $e) {
            return response()->json([
                "success" => false,
                "message" => $e->getMessage()
            ]);
        }
    }
}
