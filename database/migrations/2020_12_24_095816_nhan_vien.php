<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class NhanVien extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nhan_vien', function (Blueprint $table) {
            $table->id();
            $table->string('ho_ten');
            $table->string('gioi_tinh');
            $table->string("so_cmnd");
            $table->dateTime("ngay_sinh");
            $table->string("noi_sinh");
            $table->string("dien_thoai");
            $table->string("ho_khau");
            $table->string("cho_o_hien_nay");
            $table->string("so_bhyt");
            $table->dateTime("ngay_vao_lam");
            $table->string("so_the_atm");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nhan_vien');
    }
}
