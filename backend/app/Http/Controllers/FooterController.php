<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Footers;

class FooterController extends Controller
{
    public function index(){
        try{
            $footer = Footers::all();
            return response()->json(['message'=>'Footer data getting successfully ','Footer'=>$footer]);
        }catch (\Exception $e) {
            return response()->json(['message' => 'Error geting of Footer data','error' => $e->getMessage()], 500);
        }
    }
    public function create(Request $request){
        try{
            $footer = new Footers();
            $footer->title = $request->title;
            $footer->type = $request->type;
            $footer->published = 1;
            $footer->save();
            return response()->json(['message'=>'Footer data save sucessfully','footer'=>$footer]);

        }catch(\Exception $e){
            return response()->json(['message' => 'Error geting of Footer data','error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id){
        try{
            $footer = Footers::find($id);
            $footer->title = $request->title;
            $footer->type = $request->type;
            $footer->published = $request->published;
            $footer->save();
            return response()->json(['message'=>'Footer Updating sucessfully','footer'=>$footer]);

        }catch(\Exception $e){
            return response()->json(['message' => 'Error updating Footer data','error' => $e->getMessage()], 500);
        }
    }

    public function publish($id){
        try{
            $footer = Footers ::find($id);
            if($footer==1){
                $footer->published = 0;
                $footer->save();
                return response()->json(['message'=> 'Published publish to change unpublished' , $footer],202);
            }else{
                $footer->published = 1;
                $footer->save();
                return response()->json(['message'=> 'Unpublished publish to change published' , $footer],201);
            }
        }catch(\Exception $e){
            return response()->json(['message' => 'Error updating Footer data','error' => $e->getMessage()], 500);
        }
    }
}
