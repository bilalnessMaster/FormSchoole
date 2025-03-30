<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'date_of_birth',
        'gender',
        'nationality',
        'phone',
        'address',
        'field_of_study',
        'last_score',
        'high_school',
        'graduation_year',
    ];
    
}
