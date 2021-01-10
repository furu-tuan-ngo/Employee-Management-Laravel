<?php

namespace App\Http\Controllers;

use App\Services\BangLuongService;
use Illuminate\Http\Request;
use App\Services\UserService;

class BangLuongController extends Controller
{
    protected $bangLuongService;
    protected $userService;

    function __construct(
        BangLuongService $bangLuongService,
        UserService $userService
    ) {
        $this->bangLuongService = $bangLuongService;
        $this->userService = $userService;
    }

    public function index(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                $bangLuongs = $this->bangLuongService->getBangLuongs($request);
                return response()->json([
                    'success' => true,
                    'data' => $bangLuongs
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => $e->getMessage()
                ]);
            }
        }
    }

    public function getLookupValues(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                $bangLuongs = $this->bangLuongService->getLookupValues();
                return response()->json([
                    'success' => true,
                    'data' => $bangLuongs
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => $e->getMessage()
                ]);
            }
        }
    }
    public function save(Request $request)
    {
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                return $this->_getDataResponse($this->bangLuongService->saveBangLuong(collect($request))); // Return Id of new
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
                return $this->_getDataResponse($this->bangLuongService->getOne($id)); // Return Id of new
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

        // dd($request);
        if ($this->userService->hasRole($request->user()->id, 'admin')) {
            try {
                // Ignore validate request
                $result = $this->bangLuongService->update($request); // Return Id of new
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
                $result = $this->bangLuongService->delete($id); // Return Id of new
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
