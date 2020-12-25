<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyChuyenCongTac extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('chuyen_cong_tac', function (Blueprint $table) {
            $table->foreignId('ma_nhan_vien')->constrained('nhan_vien')->onDelete('cascade');
            $table->foreignId('ma_chuc_vu_cu')->constrained('chuc_vu')->onDelete('cascade');
            $table->foreignId('ma_chuc_vu_moi')->constrained('chuc_vu')->onDelete('cascade');
            $table->foreignId('ma_phong_ban_cu')->constrained('phong_ban')->onDelete('cascade');
            $table->foreignId('ma_phong_ban_moi')->constrained('phong_ban')->onDelete('cascade');
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
