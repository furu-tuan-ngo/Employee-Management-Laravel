<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyBangLuong extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bang_luong', function (Blueprint $table) {
            $table->foreignId('ma_nhan_vien')->constrained('nhan_vien')->onDelete('cascade');
            $table->foreignId('ma_phong_ban')->constrained('phong_ban')->onDelete('cascade');
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
