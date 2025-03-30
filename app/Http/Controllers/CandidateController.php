<?php

namespace App\Http\Controllers;

use App\Models\Candidate;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CandidateController extends Controller
{
    public function index()
    {
        return Inertia::render('auth/create-candidate');
    }
    public function store(Request $request)
    {
        // Validation Rules
        $request->validate([
            'date_of_birth' => 'required|date',
            'gender' => 'required|in:homme,femme',
            'nationality' => 'required|string|max:100',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string',
            'field_of_study' => 'required|string|max:255',
            'last_score' => 'required|numeric|between:0,20', // Adjust based on grading system
            'high_school' => 'required|string|max:255',
            'graduation_year' => 'required|integer|min:1900|max:' . date('Y'),
        ]);

        // Store Candidate
        $candidate = Candidate::create([
            'user_id' => Auth::id(), // Assign logged-in user ID
            'date_of_birth' => $request->date_of_birth,
            'gender' => $request->gender,
            'nationality' => $request->nationality,
            'phone' => $request->phone,
            'address' => $request->address,
            'field_of_study' => $request->field_of_study,
            'last_score' => $request->last_score,
            'high_school' => $request->high_school,
            'graduation_year' => $request->graduation_year,
        ]);
        return redirect('/dashboard');
    }
    public function delete(Request $request){
        $candidature = Candidate::find($request->id);
        $candidature->delete();
        session()->flash('status', 'Successfully deleted');
        return redirect()->back();
    }
    public function accepte(Request $request){
        $candidature = Candidate::find($request->id);
        $candidature->application_status = 'accepte' ;
        $candidature->save();
        session()->flash('status', 'Successfully update');
        return redirect()->back();
    }
    public function refuse(Request $request){
        $candidature = Candidate::find($request->id);
        $candidature->application_status = 'refuse' ;
        $candidature->save();
        session()->flash('status', 'Successfully update');
        return redirect()->back();
    }
    public function planifier(Request $request){

        $candidature = Candidate::find($request->id);
        $candidature->visit = $request->date ;
        $candidature->save();
        session()->flash('status', 'Successfully update');
        return redirect()->back();
    }
}
