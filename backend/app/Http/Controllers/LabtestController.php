<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Labtest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LabtestController extends Controller
{
    public function index(){
        try{
            $labtest = Labtest::all();
            if(!$labtest){
                return response()->json(['message'=>'lab test not fount'],404);
            }
            return response()->json(['message'=>'lab test data get successfully', 'data'=>$labtest],201);
        }catch(\Exception $e){
            return response()->json(['message' => 'Error geting lab test', 'error' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request){
        try{
            $labtest = new Labtest();
            $labtest->name = $request->name;
            $labtest->short_discription = $request->short_discription;
            $labtest->lab_categoryid = $request->lab_categoryid;
            $labtest->lab_nameid = $request->lab_nameid;
            $labtest->price = $request->price;
            $labtest->sku = $request->sku;
            $labtest->mrp = $request->mrp;
            $imageFile = $request->file('thumbnail');
            $originalFileName = $imageFile->getClientOriginalName();
            $hashedFileName = $imageFile->storeAs('LabTest', $originalFileName, 'public');
            $labtest->thumbnail = $hashedFileName;
            $labtest->save();
            return response(['message'=>'Labtest data created successfully',$labtest],202);
            
        }catch(\Exception $e){
            return response()->json(['message' => 'Error creating lab test', 'error' => $e->getMessage()], 500);
        }
    }

    public function getone($id){
        try{
            $labtest = Labtest::find($id);
            if(!$labtest){
                return response()->json(['message'=>'Lab Test Type data not find'],404);
            }
            return response()->json(['message'=>'lab test type data get successfully', 'data'=>$labtest ],202);
        }catch(\Exception $e){
            return response()->json(['message' => 'Error geting lab test', 'error' => $e->getMessage()], 500);
        }
    }

    public function publish(Request $request,$id) {
        try{
            $labtest = Labtest::find($id);
            if(!$labtest){
                return response()->json(['message'=>'Lab Test Type not find'],404);
            }
            $labtest->published = $request->published;
            $labtest->save();
            return response()->json(['message'=>'lab test type pulished  get successfully', 'data'=>$labtest ],202);
        }catch(\Exception $e){
            return response()->json(['message' => 'Error pulished lab test', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request,$id){
        try{
            $labtest =  Labtest::find($id);
            $labtest->name = $request->name;
            $labtest->short_discription = $request->short_discription;
            $labtest->lab_categoryid = $request->lab_categoryid;
            $labtest->lab_nameid = $request->lab_nameid;
            $labtest->price = $request->price;
            $labtest->sku = $request->sku;
            $labtest->mrp = $request->mrp;
            $imageFile = $request->file('thumbnail');
            if($imageFile){
                Storage::disk('public')->delete('/' . $labtest->upload_photo);
                $originalFileName = $imageFile->getClientOriginalName();
                $hashedFileName = $imageFile->storeAs('LabTest', $originalFileName, 'public');
                $labtest->thumbnail = $hashedFileName;
            }
            $labtest->save();
            return response(['message'=>'Labtest data update successfully',$labtest],202);
            
        }catch(\Exception $e){
            return response()->json(['message' => 'Error updating lab test', 'error' => $e->getMessage()], 500);
        }
    }

    public function delete($id) {
        $labtest = Labtest::find($id);
        if(!$labtest){
            return response()->json(['message'=>'Labtest is not found '.$id],404);
        }
        $labtest->delete();
            if ($labtest->thumbnail) {
                Storage::disk('public')->delete('/' . $labtest->thumbnail);
            }
        return response()->json(['message'=>'Labtest data deleted successfully'],202);
    }

}
