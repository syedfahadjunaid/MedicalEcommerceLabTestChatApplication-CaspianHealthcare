<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Doctors;

class DoctorsController extends Controller
{
    public function index(){
        try {
            $doctors = Doctors::all();
            if (!$doctors) {
                return response()->json(['message' => 'Sub Category is not found'], 404);
            }
            return response()->json(['message' => 'doctors data get successfully', 'sub_Categories' => $doctors], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving Doctors data', 'error' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request){
        try {
            $doctor = new Doctors();
            $doctor->first_name = $request->first_name;
            $doctor->last_name = $request->last_name;
            $doctor->number = $request->number;
            $doctor->dob = $request->dob;
            $doctor->gender = $request->gender;
            $doctor->zip_code = $request->zip_code;
            $doctor->city = $request->city;
            $doctor->doctor_role = $request->doctor_role;
            $doctor->address = $request->address;
            $doctor->bio = $request->bio;
            $doctor->main_specialization = $request->main_specialization;
            $doctor->secondary_specialization = $request->secondary_specialization;
            $doctor->medical_education = $request->medical_education;
            $doctor->experience = $request->experience;
            $imageFile = $request->file('profile_image');
            $originalFileName = $imageFile->getClientOriginalName();
            $hashedFileName = $imageFile->storeAs('Doctor', $originalFileName, 'public');
            $doctor->profile_image = $hashedFileName;
            $doctor->save();
            return response()->json(['message' => 'doctor craeted successfully', 'doctor' => $doctor], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error to add doctor ', 'error' => $e->getMessage()], 500);
        }
    }

    public function getOne($id){
        $doctor = Doctors::find($id);
        if(!$doctor){
            return response()->json(['message'=>'Doctors is not found']); 
        }
        return response()->json(['message' => 'Doctors data get successfully', 'Doctors' => $doctor], 201);
    }

    public function delete ($id){
        try {
            $doctor = Doctors::findOrFail($id);
            $doctor->delete();
            return response()->json(['message' => 'doctor deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting doctor', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request , $id){
        try {
            $doctor =  Doctors::find($id);
            $doctor->first_name = $request->first_name;
            $doctor->last_name = $request->last_name;
            $doctor->number = $request->number;
            $doctor->dob = $request->dob;
            $doctor->gender = $request->gender;
            $doctor->zip_code = $request->zip_code;
            $doctor->city = $request->city;
            $doctor->doctor_role = $request->doctor_role;
            $doctor->address = $request->address;
            $doctor->bio = $request->bio;
            $doctor->main_specialization = $request->main_specialization;
            $doctor->secondary_specialization = $request->secondary_specialization;
            $doctor->medical_education = $request->medical_education;
            $doctor->experience = $request->experience;
            $imageFile = $request->file('profile_image');
            $originalFileName = $imageFile->getClientOriginalName();
            $hashedFileName = $imageFile->storeAs('Doctor', $originalFileName, 'public');
            $doctor->profile_image = $hashedFileName;
            $doctor->save();
            return response()->json(['message' => 'doctor updated successfully', 'doctor' => $doctor], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error to updated doctor ', 'error' => $e->getMessage()], 500);
        }
    }
}
