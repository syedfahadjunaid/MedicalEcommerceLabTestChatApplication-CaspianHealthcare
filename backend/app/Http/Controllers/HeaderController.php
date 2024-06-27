<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Headers;

class HeaderController extends Controller
{
    public function index(){
        try {
            $header = Headers::all();
            return response()->json(['message' => 'Headers data get successfully', 'Headers' => $header], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving Labs data', 'error' => $e->getMessage()], 500);
        };
    }

    public function create(Request $request){
        try {
            $header = new Headers();
            $header->title = $request->title;
            $header->published = 1;
            $header->save();
            return response()->json(['message' => 'Headers created successfully', 'Headers' => $header], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error created the headers', 'error' => $e->getMessage()], 500);
        };
    }

    public function publish(Request $request, $id){
        $header = Headers::find($id);
        if ($header) {
            if ($request->published == 0) {
                $header->published = 1;
                return response()->json(['message' => 'Header published successfully'], 201);
            } else {
                $header->published = 0;
                return response()->json(['message' => 'Header Unpublished successfully'], 200);
            }
        }
        return response()->json(['message' => 'header is not found'], 404);
    }

    public function getone($id){
        try {
            $header = Headers::find($id);
            return response()->json(['message' => 'Header Unpublished successfully', 'Headers' => $header], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error created the headers', 'error' => $e->getMessage()], 500);
        };
    }
    public function update(Request $request, $id){
        try{
            $header =  Headers::find($id);
            $header->title = $request->title;
            $header->published = 1;
            $header->save();
            return response()->json(['message' => 'Headers updated successfully', 'Headers' => $header], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updated the headers', 'error' => $e->getMessage()], 500);
        };
    }

    public function delete ($id){
        try {
            $header = Headers::findOrFail($id);
            $header->delete();
            return response()->json(['message' => 'header deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting header', 'error' => $e->getMessage()], 500);
        }
    }
}
