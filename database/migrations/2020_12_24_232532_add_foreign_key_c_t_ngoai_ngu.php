<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyCTNgoaiNgu extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('c_t_ngoai_ngu', function (Blueprint $table) {
            $table->foreignId('ma_ngoai_ngu')->constrained('ngoai_ngu')->onDelete('cascade');
            $table->foreignId('ma_nhan_vien')->constrained('nhan_vien')->onDelete('cascade');
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
