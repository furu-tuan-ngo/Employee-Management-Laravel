<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CTNgoaiNgu extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('c_t_ngoai_ngu', function (Blueprint $table) {
            $table->id();
            $table->dateTime("ngay_cap");
            $table->string("noi_cap");
            $table->string("trinh_do");
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
        Schema::dropIfExists('c_t_ngoai_ngu');
    }
}
