<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CTKhenThuong extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('c_t_khen_thuong', function (Blueprint $table) {
            $table->id();
            $table->dateTime("ngay_qd");
            $table->string("noi_dung");
            $table->string("hinh_thuc");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('c_t_khen_thuong');
    }
}
