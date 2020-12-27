<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function _authorize()
    {
        return response()->json([
            'success' => false,
            'message' => 'Unauthorized'
        ]);
    }

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
