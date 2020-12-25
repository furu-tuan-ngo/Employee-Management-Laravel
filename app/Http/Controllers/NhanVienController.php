<?php

namespace App\Http\Controllers;

use App\Services\NhanVienService;
use Illuminate\Http\Request;

class NhanVienController extends Controller
{
    protected $nhanVienService;

    function __construct(NhanVienService $nhanVienService)
    {
        $this->nhanVienService = $nhanVienService;
    }

    public function index()
    {
        try {
            $nhanViens = $this->nhanVienService->getNhanViens();

            return response()->json([
                'success' => true,
                'data' => $nhanViens
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ]);
        }
    }
}
