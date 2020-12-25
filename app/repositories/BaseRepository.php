<?php

namespace App\Repositories;

class BaseRepository
{
    protected $model;

    public function all()
    {
        return $this->model->latest()->get();
    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function insert($record)
    {
        $record->put('created_at', date('Y-m-d h:i:s'));
        $record->put('updated_at', date('Y-m-d h:i:s'));

        return $this->model->insertGetId(
            $record->all()
        );
    }

    public function update($record, $id)
    {
        $record->put('updated_at', date('Y-m-d h:i:s'));

        $this->model->where('id', $id)->update($record->all());

        return $id;
    }

    public function delete($id)
    {
        if ($this->find($id)) {
            $this->model->destroy($id);
            return true;
        }
        return false;
    }
}
