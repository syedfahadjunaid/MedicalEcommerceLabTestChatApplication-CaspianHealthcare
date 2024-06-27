<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Labcategories;
use Illuminate\Http\Request;
use App\Models\Labs;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class LabController extends Controller
{
    public function index()
    {
        try {
            $labs = Labs::all();
            if (!$labs) {
                return response()->json(['message' => 'Labs is not found'], 404);
            }
            return response()->json(['message' => 'Labs data get successfully', 'Labs' => $labs], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving Labs data', 'error' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request)
    {
        Log::info('User failed to login.', ['id' => $request]);
        try {
            $lab = new Labs();
            $lab->lab_name = $request->lab_name;
            $lab->lab_category_name = $request->lab_category_name;
            $lab->city = $request->city;
            $lab->address = $request->address;
            $imageFile = $request->file('upload_photo');
            $originalFileName = $imageFile->getClientOriginalName();
            $hashedFileName = $imageFile->storeAs('Labs', $originalFileName, 'public');
            $lab->upload_photo = $hashedFileName;
            $lab->save();
            Log::info('User {id} failed to login.', ['id' => $lab->id]);
            if (!$lab) {
                return response()->json(['message' => 'Labs is not created '], 404);
            }
            return response()->json(['message' => 'Labs created successfully', 'Labs' => $lab], 201);
        } catch (\Exception $e) {
            Log::info('User {id} failed to login.', ['id' => $e->getMessage()]);
            return response()->json(['message' => 'Error retrieving Labs data', 'error' => $e->getMessage()], 500);
        }
    }

    public function getOne($id)
    {
        $lab = Labs::find($id);
        if (!$lab) {
            return response()->json(['message' => 'Labs is not found '], 404);
        }
        return response()->json(['message' => 'Labs found data get successfully', 'Labs' => $lab], 201);
    }

    public function update(Request $request, $id)
    {
        try {
            $lab = Labs::find($id);
            $lab->lab_name = $request->lab_name;
            $lab->lab_category_name = $request->lab_category_name;
            $lab->city = $request->city;
            $lab->address = $request->address;
            if ($request->file('upload_photo')) {
                $imageFile = $request->file('upload_photo');
                Storage::disk('public')->delete('/' . $lab->upload_photo);
                $originalFileName = $imageFile->getClientOriginalName();
                $hashedFileName = $imageFile->storeAs('Labs', $originalFileName, 'public');
                $lab->upload_photo = $hashedFileName;
            }
            $lab->save();
            if (!$lab) {
                return response()->json(['message' => 'Labs is not update '], 404);
            }
            return response()->json(['message' => 'Labs update successfully', 'Labs' => $lab], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving Labs data', 'error' => $e->getMessage()], 500);
        }
    }
    public function publishlab(Request $request, $id)
    {
        try {
            $labcategory = Labs::find($id);
            $labcategory->published = $request->published;
            $labcategory->save();
            return response()->json(['message' => 'lab is published successfully', $labcategory], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error published lab', 'error' => $e->getMessage()], 500);
        }
    }

    public function delete($id)
    {
        try {
            $lab = Labs::findOrFail($id);
            if ($lab) {
                Storage::disk('public')->delete('/' . $lab->upload_photo);
                $lab->delete();
            }
            return response()->json(['message' => 'lab deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting lab', 'error' => $e->getMessage()], 500);
        }
    }

    public function createlabcategory(Request $request)
    {
        try {
            $labcategory = new Labcategories();
            $labcategory->category_name = $request->category_name;
            $labcategory->save();
            return response()->json(['message' => 'lab-Category is created successfully', $labcategory], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error creating lab category', 'error' => $e->getMessage()], 500);
        }
    }

    public function getalllabcategory()
    {
        try {
            $labcategory = Labcategories::all();
            return response()->json(['message' => 'Labb-Category data getting successfully', 'data' => $labcategory], 201);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Error getiing data lab category', 'error' => $e->getMessage()], 500);
        }
    }

    public function getonelabcategory($id)
    {
        try {
            $labcategory = Labcategories::find($id);
            if (!$labcategory) {
                return response()->json(['message' => 'lab Category is not exit' . $id], 404);
            }
            return response()->json(['message' => 'Lab Category Data get successfully ', 'labCategory' => $labcategory], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error getiing data lab category', 'error' => $e->getMessage()], 500);
        }
    }

    public function updatelabcategory(Request $request, $id)
    {
        try {
            $labcategory = Labcategories::find($id);
            $labcategory->category_name = $request->category_name;
            $labcategory->save();
            return response()->json(['message' => 'lab-Category is updated successfully', $labcategory], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating lab category', 'error' => $e->getMessage()], 500);
        }
    }
    public function publishlabcategory(Request $request, $id)
    {
        try {
            $labcategory = Labcategories::find($id);
            $labcategory->published = $request->published;
            $labcategory->save();
            return response()->json(['message' => 'lab-Category is published successfully', $labcategory], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error published lab category', 'error' => $e->getMessage()], 500);
        }
    }

    public function deletecategory($id)
    {
        try {
            $lab = Labcategories::findOrFail($id);
            $lab->delete();
            return response()->json(['message' => 'Labcategories deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting Labcategories', 'error' => $e->getMessage()], 500);
        }
    }
}
