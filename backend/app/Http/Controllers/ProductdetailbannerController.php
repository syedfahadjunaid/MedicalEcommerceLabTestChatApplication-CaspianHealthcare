<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ProductDetailBanners;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductdetailbannerController extends Controller
{
    public function index(){
        try{
            $productbanner = ProductDetailBanners::all();
            return response()->json(['message'=>'Product Detaile Banners data get succssfully','productbanner'=> $productbanner],201);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving Product Detaile Banners  data', 'error' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request){
        try{
            $productbanner = new ProductDetailBanners();
            $productbanner->link = $request->link;
            $imageFile = $request->file('image');
            $originalFileName = $imageFile->getClientOriginalName();
            $hashedFileName = $imageFile->storeAs('productbanner', $originalFileName, 'public');
            $productbanner->image = $hashedFileName;
            $productbanner->save();

            return response()->json(['message'=>'product Details Banners created successfully'],201);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error creating Product Detaile Banners  data', 'error' => $e->getMessage()], 500);
        }
    }

    public function getone($id){
        $productbanner = ProductDetailBanners::find($id);
        if(!$productbanner){
            return response()->json(['message'=>'banner product is not found']);
        }
        return response()->json(['message'=>'product Details Banners data get successfully', 'ProductDetails'=>$productbanner],201);
    }

    public function delete($id){
        try{
            $productbanner = ProductDetailBanners::find($id);
            if(!$productbanner){
                return response()->json(['message'=>'product Details Banners is not found'],404);
            }
            $productbanner->delete();
            return response()->json(['message'=>'product Details Banners deleted sucessfully'],201);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error to deleting the product Details Banners', 'error' => $e->getMessage()], 500);
        }
    }

    public function updatea(Request $request, $id){
        try{
            $productbanner = new ProductDetailBanners();
            $productbanner->link = $request->link;
            if ($request->hasFile('image')) {
                Storage::disk('public')->delete('/' . $productbanner->image);
                $originalFileName = $request->file('image')->getClientOriginalName();
                $hashedFileName = $request->file('image')->storeAs('productbanner', $originalFileName, 'public');
                $productbanner->image = $hashedFileName;
            }
            $productbanner->save();

            return response()->json(['message'=>'product Details Banners udated successfully'],201);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error Updating Product Detaile Banners  data', 'error' => $e->getMessage()], 500);
        }
    }
}
