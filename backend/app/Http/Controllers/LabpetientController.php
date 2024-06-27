<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\LabPatients;
use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;

class LabpetientController extends Controller
{
    public function index()
    {
        try {
            $labpatient = LabPatients::all();
            return response()->json(['message' => 'Lab patient data get successfull', 'data' => $labpatient], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error getting lab patient', 'error' => $e->getMessage()], 500);
        }
    }

    public function creat(Request $request)
    {
        try {
            $labpatient = new LabPatients();
            $labpatient->name = $request->name;
            $labpatient->age = $request->age;
            $labpatient->gender = $request->gender;
            $labpatient->full_address = $request->full_address;
            $labpatient->city = $request->city;
            $labpatient->pin_code = $request->pin_code;
            $labpatient->land_mark = $request->land_mark;
            $labpatient->mobile_number = $request->mobile_number;
            $labpatient->referd_by = $request->referd_by;
            $labpatient->date = $request->date;
            $labpatient->time = $request->time;
            $labpatient->save();
            return response()->json(['message' => 'Lab Patients data created successfully', 'data' => $labpatient], 202);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error creating lab patient', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $labpatient = LabPatients::find($id);
            if (!$labpatient) {
                return response()->json(['message' => 'Lab Patient not find'], 404);
            }
            $labpatient->name = $request->name;
            $labpatient->age = $request->age;
            $labpatient->gender = $request->gender;
            $labpatient->full_address = $request->full_address;
            $labpatient->city = $request->city;
            $labpatient->pin_code = $request->pin_code;
            $labpatient->land_mark = $request->land_mark;
            $labpatient->mobile_number = $request->mobile_number;
            $labpatient->referd_by = $request->referd_by;
            $labpatient->date = $request->date;
            $labpatient->time = $request->time;
            $labpatient->save();
            return response()->json(['Message' => 'Lab Patient updated successfull', 'data' => $labpatient], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error Updating lab patient', 'error' => $e->getMessage()], 500);
        }
    }

    public function getone($id)
    {
        try {
            $labpatient = LabPatients::find($id);
            if (!$labpatient) {
                return response()->json(['message' => 'Lab Patient not find'], 404);
            }
            return response()->json(['Lab Patient data get succefull', 'data' => $labpatient], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error getting lab patient', 'error' => $e->getMessage()], 500);
        }
    }

    public function delete($id)
    {
        try {
            $labpatient = LabPatients::find($id);
            if (!$labpatient) {
                return response()->json(['message' => 'Patient not finde'], 404);
            }
            $labpatient->delete();
            return response()->json(['Patient data deleted created successfull'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting lab patient', 'error' => $e->getMessage()], 500);
        }
    }
}
