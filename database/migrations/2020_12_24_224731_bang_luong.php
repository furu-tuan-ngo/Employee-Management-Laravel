<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class BangLuong extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bang_luong', function (Blueprint $table) {
            $table->id();
            $table->string("thang");
            $table->string("nam");
            $table->bigInteger("luong_cb");
            $table->integer("so_ngay_tang_ca");
            $table->bigInteger("luong_tang_ca");
            $table->bigInteger("tien_bao_hiem");
            $table->bigInteger("thuc_lanh");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bang_luong');
    }
}
