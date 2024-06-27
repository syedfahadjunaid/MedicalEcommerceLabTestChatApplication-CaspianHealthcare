<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pages;

class PagesController extends Controller
{
    public function index(){
        try{
            $pages = Pages::all();
            return response()->json(['message'=>'Pages data get succssfully','pages'=> $pages],201);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving pages  data', 'error' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request){
        try{
            $pages = new Pages();
            $pages->title = $request->title;
            $pages->page_link = $request->page_link;
            $pages->page_discription = $request->page_discription;
            $pages->page_discription = 1;
            $pages->save();
            return response()->json(['message'=>'Pages data created succssfully','pages'=> $pages]);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error creating pages data','error' => $e->getMessage()], 500);
        }
    }

    public function getone($id){
        $pages = Pages::find($id);
        if(!$pages){
            return response()->json(['message'=>'pages is not found']);
        }
        return response()->json(['message'=>'page data get successfully', 'pages'=>$pages],201);
    }

    public function delete($id){
        try{
            $pages = Pages::find($id);
            if(!$pages){
                return response()->json(['message'=>'pages is not found'],404);
            }
            $pages->delete();
            return response()->json(['message'=>'pages deleted sucessfully'],201);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error to deleting the Pages', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request,$id){
        try{
            $pages = Pages::find($id);
            $pages->title = $request->title;
            $pages->page_link = $request->page_link;
            $pages->page_discription = $request->page_discription;
            $pages->page_discription = 1;
            $pages->save();
            return response()->json(['message'=>'Pages data updated succssfully','pages'=> $pages]);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error updated pages data','error' => $e->getMessage()], 500);
        }
    }
    public function publish(Request $request, $id){
        $Pages = Pages::find($id);
        if ($Pages) {
            if ($request->published == 0) {
                $Pages->published = 1;
                return response()->json(['message' => 'Pages published successfully'], 201);
            } else {
                $Pages->published = 0;
                return response()->json(['message' => 'Pages Unpublished successfully'], 200);
            }
        }
        return response()->json(['message' => 'Pages is not found'], 404);
    }
}
