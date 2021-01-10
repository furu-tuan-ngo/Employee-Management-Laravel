<?php

namespace App\Http\Controllers;

use App\Services\PhongBanService;
use App\Services\UserService;
use Illuminate\Http\Request;

class PhongBanController extends Controller
{
    protected $phongBanService;
    protected $userService;
    function __construct(PhongBanService $phongBanService, UserService $userService)
    {
        $this->phongBanService = $phongBanService;
        $this->userService = $userService;
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
    public function delete(Request $request, $id)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                $result = $this->phongBanService->delete($id); // Return Id of new
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

    public function getOne(Request $request, $id)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                $result = $this->phongBanService->getOne($id); // Return Id of new
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
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                $result = $this->phongBanService->update($request); // Return Id of new
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
}
