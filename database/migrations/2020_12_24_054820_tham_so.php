<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ThamSo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tham_so', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('kieu_du_lieu');
            $table->dateTime("gia_tri");
            $table->dateTime("ghi_chu");
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
        Schema::dropIfExists('tham_so');
    }
}
