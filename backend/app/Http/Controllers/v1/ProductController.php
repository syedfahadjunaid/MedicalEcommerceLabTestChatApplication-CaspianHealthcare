<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Products;
use App\Models\ProductImages;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{

    public function createproduct(Request $request){

        try {
            $product = new Products();
            $product->productName = $request->productName;
            $product->shortDescription = $request->shortDescription;
            $product->description = $request->description;
            $product->category_id = $request->category_id;
            $product->sub_category_id = $request->sub_category_id;
            $product->brand_id = $request->brand_id;
            $product->qualntity = $request->qualntity;
            $product->productUnit = $request->productUnit;
            $product->price = $request->price;
            $product->stock = $request->stock;
            $product->skucode = $request->skucode;
            $product->created_by = $request->created_by;
            $product->save();
                foreach ($request->file('product_images') as $image) {
                $newOriginalFileName = $image->getClientOriginalName();
                $path = $image->storeAs('product_images', $newOriginalFileName, 'public');
                $product->images()->create(['image_path' => $path]);
            }
            return response()->json(['message' => 'product created successfully',  'product' => $product,], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving product data', 'error' => $e->getMessage()], 500);
        }
    }

    public function getproductImage($products_id){
        if(!$products_id){
            return response()->json(['message' => 'Product is not find'], 404);
        }
        $product_image = ProductImages::where('products_id',$products_id)->get();
        return response()->json($product_image);
    }


    public function showproduct()
    {
        try {
            $product = Products::with('images')->get();
            if (!$product) {
                return response()->json(['message' => 'Product not found'], 404);
            }
            return response()->json(['message' => 'product data get successfully', 'product' => $product], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving product data', 'error' => $e->getMessage()], 500);
        }
    }

    public function getoneproduct($id)
    {
        try {
            $product = Products::with('images')->find($id);
            if (!$product) {
                return response()->json(['message' => 'Product is not find'], 404);
            }
            return response()->json(['message' => 'Product data get successfully', 'product' => $product], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving product data', 'error' => $e->getMessage()], 500);
        }
    }
    public function getproductbycategory($category_id)
    {
        try {
            $product = Products::with('images')->where('Category_id',$category_id)->get();
            if (!$product) {
                return response()->json(['message' => 'Product is not find'], 404);
            }
            return response()->json(['message' => 'Product data get successfully', 'product' => $product], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving product data', 'error' => $e->getMessage()], 500);
        }
    }
    public function getproductbysub_category($subcategory_id)
    {
        try {
            $product = Products::with('images')->where('sub_category_id',$subcategory_id)->get();
            if (!$product) {
                return response()->json(['message' => 'Product is not find'], 404);
            }
            return response()->json(['message' => 'Product data get successfully', 'product' => $product], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving product data', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request,$id)
    {
       try {
            $product = Products::find($id);
            $product->productName = $request->productName;
            $product->shortDescription = $request->shortDescription;
            $product->description = $request->description;
            $product->category_id = $request->category_id;
            $product->sub_category_id = $request->sub_category_id;
            $product->brand_id = $request->brand_id;
            $product->qualntity = $request->qualntity;
            $product->productUnit = $request->productUnit;
            $product->price = $request->price;
            $product->stock = $request->stock;
            $product->skucode = $request->skucode;
            $product->created_by = $request->created_by;
            $product->save();
            return response()->json(['message' => 'product updated successfully',  'product' => $product,], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving product data', 'error' => $e->getMessage()], 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            $product = Products::findOrFail($id);
            $oldOriginalFileName = $product->categorieImage;
            $product->delete();
            if ($oldOriginalFileName) {
                Storage::disk('public')->delete('/' . $oldOriginalFileName);
            }
            return response()->json(['message' => 'product deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error product category', 'error' => $e->getMessage()], 500);
        }
    }

}