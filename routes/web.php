<?php

use App\Http\Controllers\adminController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\etudiantController;
use App\Http\Middleware\CandidateCheck;
use App\Http\Middleware\RoleMiddleware;
use App\Models\Candidate;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
// admin routes 
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [adminController::class , 'index'])->middleware(RoleMiddleware::class)->name('dashboard');
});


// student routes
Route::middleware(['auth', 'verified'])->group(function () {
    // CRUD CANDIDATURE
    Route::get('/create-candidate', [CandidateController::class, 'index'])->middleware(CandidateCheck::class)->name('create-candidate');
    Route::post('/save-candidate', [CandidateController::class, 'store'])->middleware(CandidateCheck::class)->name('save-candidate');
    Route::post('/delete-candidate', [CandidateController::class, 'delete'])->middleware(RoleMiddleware::class)->name('delete-candidature');
    // STATUS UPDATE ROUTES 
    Route::post('/refuse-candidate', [CandidateController::class, 'refuse'])->middleware(RoleMiddleware::class)->name('refues-candidate');
    Route::post('/accepte-candidate', [CandidateController::class, 'accepte'])->middleware(RoleMiddleware::class)->name('accepte-candidate');
    Route::post('/planifier-candidate', [CandidateController::class, 'planifier'])->middleware(RoleMiddleware::class)->name('planifier-candidate');


    Route::get('etudiant', [etudiantController::class , 'index'])->name('etudiant');
});
require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
