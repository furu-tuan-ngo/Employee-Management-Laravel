<?php

namespace App\Http\Controllers;

use App\Models\CtKhenThuong;
use App\Models\CtKyLuat;
use App\Models\CtNgoaiNgu;
use App\Models\CtTrinhDo;
use App\Services\NhanVienService;
use App\Services\UserService;
use App\Services\CtKhenThuongService;
use App\Services\CtKyLuatService;
use App\Services\CtNgoaiNguService;
use App\Services\CtTrinhDoService;
use Illuminate\Http\Request;

class NhanVienController extends Controller
{
    protected $nhanVienService;
    protected $userService;
    protected $ctKhenThuongService;
    protected $ctKyLuatService;
    protected $ctNgoaiNguService;
    protected $ctTrinhDoService;

    function __construct(
        NhanVienService $nhanVienService,
        UserService $userService,
        CtKhenThuongService $ctKhenThuongService,
        CtKyLuatService $ctKyLuatService,
        CtNgoaiNguService $ctNgoaiNguService,
        CtTrinhDoService $ctTrinhDoService
    ) {
        $this->nhanVienService = $nhanVienService;
        $this->userService = $userService;
        $this->ctKhenThuongService = $ctKhenThuongService;
        $this->ctKyLuatService = $ctKyLuatService;
        $this->ctNgoaiNguService = $ctNgoaiNguService;
        $this->ctTrinhDoService = $ctTrinhDoService;
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

    public function setKhenThuong(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                return $this->_getDataResponse($this->ctKhenThuongService->save(collect($request))); // Return Id of new
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

    public function setKyLuat(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                return $this->_getDataResponse($this->ctKyLuatService->save(collect($request))); // Return Id of new
            } catch (\Exception $e) {
                return response()->json([
                    "success" => false,
                    "message" => $e->getMessage()
                ]);
            }
        }
        return $this->_authorize();
    }

    public function setNgoaiNgu(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                return $this->_getDataResponse($this->ctNgoaiNguService->save(collect($request))); // Return Id of new
            } catch (\Exception $e) {
                return response()->json([
                    "success" => false,
                    "message" => $e->getMessage()
                ]);
            }
        }
        return $this->_authorize();
    }

    public function setTrinhDo(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                return $this->_getDataResponse($this->ctTrinhDoService->save(collect($request))); // Return Id of new
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
