<?php

namespace App\Http\Controllers;

use App\Services\ChucVuService;
use App\Services\UserService;
use Illuminate\Http\Request;

class ChucVuController extends Controller
{
    protected $chucVuService;
    protected $userService;
    function __construct(ChucVuService $chucVuService, UserService $userService)
    {
        $this->chucVuService = $chucVuService;
        $this->userService = $userService;
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

    public function delete(Request $request, $id)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                $result = $this->chucVuService->delete($id); // Return Id of new
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
                $result = $this->chucVuService->getOne($id); // Return Id of new
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
                $result = $this->chucVuService->update($request); // Return Id of new
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
