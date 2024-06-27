<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('number');
            $table->string('dob');
            $table->string('gender');
            $table->string('zip_code');
            $table->string('city');
            $table->string('doctor_role');
            $table->string('address');
            $table->string('bio');
            $table->string('main_specialization');
            $table->string('secondary_specialization');
            $table->string('medical_education');
            $table->string('experience');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};
