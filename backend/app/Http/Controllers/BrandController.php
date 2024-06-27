<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Brands;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $brands = Brands::all();
            return response()->json(['data' => $brands], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error fetching brands', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'brand_name' => 'required|string',
                'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $imageFile = $request->file('image');
            $originalFileName = $imageFile->getClientOriginalName();
            $hashedFileName = $imageFile->storeAs('brand_images',$originalFileName, 'public');
            $brand = Brands::create([
                'brandname' => $request->brand_name,
                'image' => $hashedFileName,
            ]);
            return response()->json(['message' => 'Brand created successfully', 'data' => $brand], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error creating brand', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $brand = Brands::findOrFail($id);
            return response()->json(['data' => $brand], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Brand not found', 'error' => $e->getMessage()], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $Brand = Brands::find($id);
            if (!$Brand) {
                return response()->json(['message' => 'Brand not found', 'error' => 'not_found'], 404);
            }
            $request->validate([
                'brand_name'=>'required',
                'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048', 
            ]);
            $Brand->brandname = $request->brand_name;
          
            if ($request->hasFile('image')) {
                Storage::disk('public')->delete('/' . $Brand->image);
                $originalFileName = $request->file('image')->getClientOriginalName();
                $hashedFileName = $request->file('image')->storeAs('brand_images', $originalFileName, 'public');
                $Brand->image = $hashedFileName;
            }
            $Brand->save();
            return response()->json(['message' => 'Brand updated successfully', 'Brand' => $Brand], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating Brand', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $brand = Brands::findOrFail($id);
            $brand->delete();
            return response()->json(['message' => 'Brand deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting brand', 'error' => $e->getMessage()], 500);
        }
    }
}
