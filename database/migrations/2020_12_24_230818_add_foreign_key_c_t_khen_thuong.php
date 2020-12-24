<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyCTKhenThuong extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('c_t_khen_thuong', function (Blueprint $table) {
            $table->foreignId('ma_nhan_vien')->constrained('nhan_vien')->onDelete('cascade');
            $table->foreignId('ma_khen_thuong')->constrained('khen_thuong')->onDelete('cascade');
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
