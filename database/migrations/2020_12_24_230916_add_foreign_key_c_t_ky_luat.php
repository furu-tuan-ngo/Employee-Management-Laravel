<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyCTKyLuat extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('c_t_ky_luat', function (Blueprint $table) {
            $table->foreignId('ma_nhan_vien')->constrained('nhan_vien')->onDelete('cascade');
            $table->foreignId('ma_ky_luat')->constrained('ky_luat')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
}
