<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\TokenRepository;
use App\User;

class AuthenticationController extends Controller
{
    protected $tokenRepository;

    public function __construct(TokenRepository $tokenRepository)
    {
        $this->tokenRepository = $tokenRepository;
    }

    public function failure()
    {
        return response()->json([
            'success' => false,
            're_authenticate' => true,
        ]);
    }

    /**
     * Registration
     */
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:4',
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $token = $user->createToken('Dashboard Auth')->accessToken;

        return response()->json(['token' => $token], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $token = Auth::user()->createToken('Dashboard Auth');
            return response()->json([
                'success' => true,
                'data' => [
                    'token_id' => $token->token->id,
                    'access_token' => $token->accessToken,
                ],
            ]);
        }
        return response()->json([
            'success' => false,
            're_authenticate' => true
        ]);
    }

    public function logout($tokenId)
    {
        $this->tokenRepository->revokeAccessToken($tokenId);
        return response()->json([
            'success' => true,
        ]);
    }

    public function show(Request $request)
    {
        return response()->json([
            'success' => true,
            'data' => $request->user()
        ]);
    }
}
