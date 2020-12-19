<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return response()->json([
            "success" => true,
            "data" => Auth::user(),
        ]);
    }
}
