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
                $bangLuongs = $this->bangLuongService->getBangLuongs();
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
}
