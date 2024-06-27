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
        Schema::create('labtests', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('short_discription')->nullable();
            $table->string('thumbnail')->nullable();
            $table->integer('lab_categoryid')->nullable();
            $table->integer('lab_nameid')->nullable();
            $table->integer('price')->nullable();
            $table->string('sku')->nullable();
            $table->integer('mrp')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('labtests');
    }
};
