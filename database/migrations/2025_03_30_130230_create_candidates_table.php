<?php

use App\Models\User;
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
        Schema::create('candidates', function (Blueprint $table) {
            Schema::create('candidates', function (Blueprint $table) {
                $table->id();
                $table->foreignIdFor(User::class); // One-to-one with users table
                $table->date('date_of_birth'); // Date of birth
                $table->enum('gender', ['homme', 'femme', ]); // Gender
                $table->string('nationality', 100); // Nationality
                $table->string('phone', 20)->nullable(); // Phone number
                $table->string('address')->nullable(); // Address
                // Academic Information
                $table->string('field_of_study', 255); // Field of study
                $table->decimal('last_score', 5, 2); // Last exam score
                $table->string('high_school', 255); // High school name
                $table->year('graduation_year'); // Graduation year
                // Application Status & Interview
                $table->enum('application_status', ['attente', 'accepte', 'refuse'])->default('attente'); 
                $table->timestamp('visit')->nullable(); // Interview date if needed
                $table->timestamps();
            });
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidates');
    }
};
