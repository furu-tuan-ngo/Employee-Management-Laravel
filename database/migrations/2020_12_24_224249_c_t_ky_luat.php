<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CTKyLuat extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('c_t_ky_luat', function (Blueprint $table) {
            $table->id();
            $table->dateTime("ngay_kl");
            $table->string("nguyen_nhan");
            $table->string("hinh_thuc");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('c_t_ky_luat');
    }
}
