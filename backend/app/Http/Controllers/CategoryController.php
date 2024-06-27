<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $categories = Categories::all();
            return response()->json(['message' => 'Categories data get successfully', 'data' => $categories], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error fetching categories', 'error' => $e->getMessage()], 500);
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
                'category_name' => 'required|string',
                'category_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $imageFile = $request->file('category_image');
            $originalFileName = $imageFile->getClientOriginalName();
            $hashedFileName = $imageFile->storeAs('category_images', $originalFileName, 'public');

            $category = Categories::create([
                'categorieName' => $request->category_name,
                'categorieImage' => $hashedFileName,
            ]);

            return response()->json(['message' => 'Category created successfully', 'data' => $category], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error creating category', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $category = Categories::findOrFail($id);
            return response()->json(['message' => 'Category created successfully','data' => $category], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Category not found', 'error' => $e->getMessage()], 404);
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
            $request->validate([
                'category_name' => 'required|string',
                'category_image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);
            $category = Categories::findOrFail($id);
            $oldOriginalFileName = $category->categorieImage;
            $category->categorieName = $request->category_name;
            if ($request->hasFile('image')) {
                if ($oldOriginalFileName) {
                    Storage::disk('public')->delete('/' . $oldOriginalFileName);
                }
                $newOriginalFileName = $request->file('image')->getClientOriginalName();
                $hashedFileName = $request->file('image')->storeAs('category_images', $newOriginalFileName,'public');
                $category->categorieImage = $hashedFileName;
            }
            $category->save();

            return response()->json(['message' => 'Category updated successfully', 'data' => $category], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating category', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $category = Categories::findOrFail($id);

            $oldOriginalFileName = $category->categorieImage;

            $category->delete();

            if ($oldOriginalFileName) {
                Storage::disk('public')->delete('/' . $oldOriginalFileName);
            }

            return response()->json(['message' => 'Category deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting category', 'error' => $e->getMessage()], 500);
        }
    }
}
