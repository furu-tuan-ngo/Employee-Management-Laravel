<?php

namespace App\Http\Controllers;

use App\Services\BangLuongService;
use Illuminate\Http\Request;

class BangLuongController extends Controller
{
    protected $bangLuongService;

    function __construct(BangLuongService $bangLuongService)
    {
        $this->bangLuongService = $bangLuongService;
    }

    public function index()
    {
        return "demo";
        // try {
        //     $bangLuongs = $this->bangLuongService->getBangLuongs();
        //     return response()->json([
        //         'success' => true,
        //         'data' => $bangLuongs
        //     ]);
        // } catch (\Exception $e) {
        //     return response()->json([
        //         'success' => false,
        //         'message' => $e->getMessage()
        //     ]);
        // }
    }
}
