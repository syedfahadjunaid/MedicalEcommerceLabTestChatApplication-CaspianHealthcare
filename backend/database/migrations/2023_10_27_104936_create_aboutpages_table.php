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
        Schema::create('aboutpages', function (Blueprint $table) {
            $table->id();
            $table->string('main_image');
            $table->string('title1');
            $table->string('text_for_title1');
            $table->string('image1');
            $table->string('image2');
            $table->string('image3');
            $table->string('title2');
            $table->string('text_for_title2');
            $table->string('card1');
            $table->string('card2');
            $table->string('card3');
            $table->string('title_for_card_1');
            $table->string('title_for_card_2');
            $table->string('title_for_card_3');
            $table->string('text_for_card_3');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aboutpages');
    }
};
