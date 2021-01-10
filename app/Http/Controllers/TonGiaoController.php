<?php

namespace App\Http\Controllers;

use App\Services\TonGiaoService;
use App\Services\UserService;
use Illuminate\Http\Request;

class TonGiaoController extends Controller
{
    protected $tonGiaoService;
    protected $userService;

    function __construct(TonGiaoService $tonGiaoService, UserService $userService)
    {
        $this->tonGiaoService = $tonGiaoService;
        $this->userService = $userService;
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

    public function delete(Request $request, $id)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                $result = $this->tonGiaoService->delete($id); // Return Id of new
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
                $result = $this->tonGiaoService->getOne($id); // Return Id of new
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
                $result = $this->tonGiaoService->update($request); // Return Id of new
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
