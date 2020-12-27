<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
    protected function _getMessageResponse($message)
    {
        return response()->json([
            'message' => $message,
            'success' => false
        ]);
    }
    protected function _getDataResponse($data)
    {
        return response()->json([
            'data' => $data,
            'success' => true
        ]);
    }
}
