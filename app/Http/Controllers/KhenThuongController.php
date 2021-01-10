<?php

namespace App\Http\Controllers;

use App\Models\CtKhenThuong;
use Illuminate\Http\Request;
use App\Services\KhenThuongService;
use App\Services\CtKhenThuongService;
use App\Services\UserService;

class KhenThuongController extends Controller
{
    protected $khenThuongService;
    protected $ctKhenThuongSevice;
    protected $userService;

    function __construct(KhenThuongService $khenThuongService, CtKhenThuongService $ctKhenThuongService, UserService $userService)
    {
        $this->khenThuongService = $khenThuongService;
        $this->ctKhenThuongSevice = $ctKhenThuongService;
        $this->userService = $userService;
    }

    public function index()
    {
        try {
            return $this->_getDataResponse($this->khenThuongService->getAll());
        } catch (\Exception $e) {
            return $this->_getMessageResponse($e->getMessage());
        }
    }

    public function detail(Request $request, $id)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                $khenthuong = $this->khenThuongService->getKhenThuong($id);
                return $this->_getDataResponse($khenthuong);
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
                $result = $this->khenThuongService->deleteKhenThuong($id); // Return Id of new
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
            $result = $this->khenThuongService->updateKhenThuong(collect($request));
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
                return $this->_getDataResponse($this->khenThuongService->saveKhenThuong(collect($request))); // Return Id of new
            } catch (\Exception $e) {
                return response()->json([
                    "success" => false,
                    "message" => $e->getMessage()
                ]);
            }
        }
        return $this->_authorize();
    }

    public function saveChitiet(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                return $this->_getDataResponse($this->khenThuongService->saveChitiet(collect($request))); // Return Id of new
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
