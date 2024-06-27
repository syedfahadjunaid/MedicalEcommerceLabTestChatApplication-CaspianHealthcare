<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Coupons;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CoupanController extends Controller
{
    public function index(){
        try{
            $coupans = Coupons::all();
            return response()->json(['message'=>'coupans data get successfully','coupans'=>$coupans]);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving user details', 'error' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request){
        try{
            $coupans = new Coupons();
            $coupans->coupan_code = $request->coupan_code;
            $coupans->product_id = $request->product_id;
            $coupans->category_id = $request->category_id;
            $coupans->discount = $request->discount;
            $coupans->start_date = $request->start_date;
            $coupans->end_date = $request->end_date;
            $imageFile = $request->file('coupan_image');
            $originalFileName = $imageFile->getClientOriginalName();
            $hashedFileName = $imageFile->storeAs('Coupan', $originalFileName, 'public');
            $coupans->image = $hashedFileName;
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving user details', 'error' => $e->getMessage()], 500);
        }
    }

    public function getone($id){
        try{
            $coupan = Coupons::find($id);
            if(!$coupan){
                return response()->json(['message'=>'coupan not find'],202);
            }
            return response()->json(['message'=>'coupan data get success','coupan'=>$coupan],202);

        }catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving user details', 'error' => $e->getMessage()], 500);
        }
    }

    public function getcoupanByproductid($productId){
        try{
            $coupan = Coupons::where('product_id',$productId)->get();
            if(!$coupan){
                return response()->json(['message'=>'coupan not find'],202);
            }
            return response()->json(['message'=>'coupan data get success','coupan'=>$coupan],202);

        }catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving user details', 'error' => $e->getMessage()], 500);
        }
    }

    public function getcoupanBycategoryid($categoryid){
        try{
            $coupan = Coupons::where('category_id',$categoryid)->get();
            if(!$coupan){
                return response()->json(['message'=>'coupan not find'],202);
            }
            return response()->json(['message'=>'coupan data get success','coupan'=>$coupan],202);

        }catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving user details', 'error' => $e->getMessage()], 500);
        }
    }

    public function delete($id){
        try {
            $coupan = Coupons::findOrFail($id);
            $oldOriginalFileName = $coupan->image;
            $coupan->delete();
            if ($oldOriginalFileName) {
                Storage::disk('public')->delete('/' . $oldOriginalFileName);
            }
            return response()->json(['message' => 'coupan deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error coupan category', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request,$id){
        try{
            $coupans = Coupons::find($id);
            if(!$coupans){
                return response()->json(['massage'=>'Coupans is not exist with '.$id],404);
            }
            $coupans->coupan_code = $request->coupan_code;
            $coupans->product_id = $request->product_id;
            $coupans->category_id = $request->category_id;
            $coupans->discount = $request->discount;
            $coupans->start_date = $request->start_date;
            $coupans->end_date = $request->end_date;
            if($request->file('coupan_image')){
                $img = $coupans->image;
                if ($img) {
                    Storage::disk('public')->delete('/' . $img);
                }
                $imageFile = $request->file('coupan_image');
                $originalFileName = $imageFile->getClientOriginalName();
                $hashedFileName = $imageFile->storeAs('Coupan', $originalFileName, 'public');
                $coupans->image = $hashedFileName;
            }
            $coupans->save();
            return response()->json(['message'=>'Coupans created sccessfully',$coupans],201);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving user details', 'error' => $e->getMessage()], 500);
        }
    }
}
