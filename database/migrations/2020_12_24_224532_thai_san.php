<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ThaiSan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('thai_san', function (Blueprint $table) {
            $table->id();
            $table->dateTime("ngay_nghi_sinh");
            $table->dateTime("ngay_tro_lai");
            $table->bigInteger("tro_cap_cong_ty");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('thai_san');
    }
}
