<?php

namespace App\Services;

use App\Repositories\UserRepository;

class UserService
{
    protected $userRepository;

    function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function hasRole($id, $roleName)
    {
        $currentUser = $this->userRepository->getRoleUser($id);
        if ($currentUser->phan_quyen->name == $roleName) {
            return true;
        }
        return false;
    }
}
