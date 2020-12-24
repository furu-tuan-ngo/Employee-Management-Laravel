<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CTTrinhDo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('c_t_trinh_do', function (Blueprint $table) {
            $table->id();
            $table->string('chuyen_mon');
            $table->dateTime("ngay_cap");
            $table->string("truong");

            $table->foreign("ma_nhan_vien")->references('id')->on('nhan_vien')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign("ma_trinh_do")->references('id')->on('trinh_do')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('c_t_trinh_do');
    }
}
