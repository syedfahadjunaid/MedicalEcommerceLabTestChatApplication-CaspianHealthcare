<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use Illuminate\Http\Request;
use App\Models\Sub_Categories;

class SubcategoryController extends Controller
{
    public function index()
    {
        try {
            $sub_Categories = Sub_Categories::all();
            if (!$sub_Categories) {
                return response()->json(['message' => 'Sub_Categories is not find'], 404);
            }
            return response()->json(['message' => 'Sub_Categories data get successfully', 'sub_Categories' => $sub_Categories], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving Sub_Categories data', 'error' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request){
        try{
            $sub_Categories = new Sub_Categories();
            $sub_Categories->categorie_id = $request->categorie_id;
            $sub_Categories->sub__categories_name = $request->sub_categories_name;
            $sub_Categories->save();
            return response()->json(['message' => 'Sub_Categories craeted successfully', 'sub_Categories' => $sub_Categories], 201);
        }catch(\Exception $e){
            return response()->json(['message' => 'Error to add Sub_Categories ', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request , $id)
    {
        $sub_Categorie = Sub_Categories::find($id);
        if(!$sub_Categorie){
            return response()->json(['message'=>'Sub Category is not found']);
        }
        $sub_Categorie->sub__categories_name =$request->sub_categories_name;
        $sub_Categorie->save();
        return response()->json(['message' => 'Sub_Categories updated successfully', 'sub_Category' => $sub_Categorie], 201);
    }

    public function getOne($id){
        $sub_Category = Sub_Categories::find($id);
        if(!$sub_Category){
            return response()->json(['message'=>'Sub Category is not found']); 
        }
        return response()->json(['message' => 'Sub_Categories data get successfully', 'sub_Category' => $sub_Category], 201);
    }

    public function getsubcategorybycatid($id){
        $CategoryId = $id;
        if($CategoryId){
            $sub_Category = Sub_Categories::where('categorie_id',$CategoryId )->get();
            return response()->json($sub_Category);
        }else{
            return response()->json(['message'=>'Sub Category is not found'], 404);
        }
    }

    public function delete ($id){
        try {
            $sub_Category = Sub_Categories::findOrFail($id);
            $sub_Category->delete();
            return response()->json(['message' => 'Sub_Category deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting Sub_Category', 'error' => $e->getMessage()], 500);
        }
    }

    public function getcetegory(){
        try{

            $Category = Categories::join('sub__categories','sub__categories.categorie_id','=','categories,id')
                            ->select('categories.name as category_name',
                             'sub__categories.sub__categories_name as sub_categories_name')->get();
            return response()->json(['message'=>'get data successfull', $Category],202);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting Sub_Category', 'error' => $e->getMessage()], 500);
        }
    }
}
