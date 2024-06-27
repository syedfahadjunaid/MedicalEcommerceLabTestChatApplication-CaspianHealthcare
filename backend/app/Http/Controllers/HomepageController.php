<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Homepages;
use PhpParser\Node\Stmt\TryCatch;

class HomepageController extends Controller
{
    public function index(){
        try {
            $homepage = Homepages::all();
            if (!$homepage) {
                return response()->json(['message' => 'homepages is not found'], 404);
            }
            return response()->json(['message' => 'homepage data get sucessfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error to geting the homepage', 'error' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request){
        try{
            $homepage = new Homepages();
            $homepage->title = $request->title;
            $homepage->link = $request->link;
            $homepage->alt_tag = $request->alt_tag;
            $homepage->category_id =$request->category_id;
            $imageFile = $request->file('image');
            $originalFileName = $imageFile->getClientOriginalName();
            $hashedFileName = $imageFile->storeAs('homepage', $originalFileName, 'public');
            $homepage->image = $hashedFileName;
            $homepage->save();
            if(!$homepage){
                return response()->json(['message' => 'homepage is not created '], 404);
            }
            return response()->json(['message' => 'homepage created successfully', 'homepage' => $homepage], 201);
        }
        catch (\Exception $e) {
            return response()->json(['message' => 'Error to creating the homepage', 'error' => $e->getMessage()], 500);
        }
    }

    public function getone($id){
        try{
            $homepage = Homepages::find($id);
            return response()->json(['message'=>'Homepage data get successfully ', $homepage],201);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error to faching the homepage', 'error' => $e->getMessage()], 500);
        }
    }

    public function delete($id){
        try{
            $homepage = Homepages::find($id);
            if(!$homepage){
                return response()->json(['message'=>'homepage is not found'],404);
            }
            $homepage->delete();
            return response()->json(['message'=>'homepage deleted sucessfully'],201);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error to deleting the homepage', 'error' => $e->getMessage()], 500);
        }

    }

    public function update(Request $request ,$id){
        try{
            $homepage = Homepages::find($id);
            $homepage->title = $request->title;
            $homepage->link = $request->link;
            $homepage->alt_tag = $request->alt_tag;
            $homepage->category_id =$request->category_id;
            $imageFile = $request->file('image');
            $originalFileName = $imageFile->getClientOriginalName();
            $hashedFileName = $imageFile->storeAs('homepage', $originalFileName, 'public');
            $homepage->image = $hashedFileName;
            $homepage->save();
            if(!$homepage){
                return response()->json(['message' => 'homepage is not update '], 404);
            }
            return response()->json(['message' => 'homepage updated successfully', 'homepage' => $homepage], 201);
        }
        catch (\Exception $e) {
            return response()->json(['message' => 'Error to updating the homepage', 'error' => $e->getMessage()], 500);
        }
    }

}
