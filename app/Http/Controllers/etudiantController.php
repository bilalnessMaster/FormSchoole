<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class etudiantController extends Controller
{
    public function index(){
        $user = Auth::user();
        $candidate = $user->candidature;
        return Inertia::render('etudiant', ['user' => $user, 'candidature' => $candidate]);
    }
}
