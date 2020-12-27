<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository extends BaseRepository
{
    function __construct(User $user)
    {
        $this->model = $user;
    }

    public function getRoleUser($id)
    {
        return $this->model->with('phan_quyen')->find($id);
    }
}
