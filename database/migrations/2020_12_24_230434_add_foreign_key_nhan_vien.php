<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyNhanVien extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('nhan_vien', function (Blueprint $table) {
            $table->foreignId('ma_ton_giao')->constrained('ton_giao')->onDelete('cascade');
            $table->foreignId('ma_dan_toc')->constrained('dan_toc')->onDelete('cascade');
            $table->foreignId('ma_phong_ban')->constrained('phong_ban')->onDelete('cascade');
            $table->foreignId('ma_chuc_vu')->constrained('chuc_vu')->onDelete('cascade');
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
