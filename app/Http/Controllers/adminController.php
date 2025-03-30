<?php

namespace App\Http\Controllers;

use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class adminController extends Controller
{
    public function index(){
        $total = Candidate::count();
        $attentes = Candidate::where('application_status', "attente")->count();
        $acceptes = Candidate::where('application_status', "accepte")->count();
        $users = DB::table('users')->select('users.id as userId', 'users.email', 'users.name', 'candidates.*')->join('candidates', 'users.id', '=', 'candidates.user_id')->get();
        return Inertia::render('dashboard', ['total' => $total, 'attentes' => $attentes, 'acceptes' => $acceptes, 'users' => $users ,  'status' => session('status')]);
}
}