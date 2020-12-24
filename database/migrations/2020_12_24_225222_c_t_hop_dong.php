<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CTHopDong extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('c_t_hop_dong', function (Blueprint $table) {
            $table->id();
            $table->dateTime("ngay_bat_dau");
            $table->dateTime("ngay_ket_thuc");
            $table->bigInteger("luong_cb");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('c_t_hop_dong');
    }
}
