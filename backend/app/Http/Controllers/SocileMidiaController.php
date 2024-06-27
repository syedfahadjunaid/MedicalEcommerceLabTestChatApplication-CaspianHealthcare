<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SocialMedias;

class SocileMidiaController extends Controller
{
    public function index(){
        try{
            $social_medias = SocialMedias::all();
            return response()->json(['message'=>'Auth login type display sucessfully' ,'Auth'=>$social_medias],202);
        }catch(\Exception $e){
            return response()->json(['message' => 'Error getting social media data','error' => $e->getMessage()], 500);
        }

    }

    public function create(Request $request){
        try{
            $Auth = new SocialMedias();
            $Auth->title = $request->title;
            $Auth->clink_id = $request->clink_id;
            $Auth->secret_key = $request->secret_key;
            $Auth->is_active = $request->is_active;
            $Auth->save();
            return response()->json(['message'=>'Auth data created sucessfully']);

        }catch(\Exception $e){
            return response()->json(['message' => 'Error getting social media data','error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id){
        try{
            $Auth = SocialMedias::find($id);
            $Auth->title = $request->title;
            $Auth->clink_id = $request->clink_id;
            $Auth->secret_key = $request->secret_key;
            $Auth->is_active = $request->is_active;
            $Auth->save();
            return response()->json(['message'=>'Auth data Updated sucessfully']);

        }catch(\Exception $e){
            return response()->json(['message' => 'Error getting social media data','error' => $e->getMessage()], 500);
        }
    }

    public function getone($id){
        try{
            $auth = SocialMedias::find($id);
            return response()->json(['message'=>'Auth data get sucessfully ', 'auth'=>$auth],201);
        }catch(\Exception $e){
            return response()->json(['message' => 'Error getting social media data','error' => $e->getMessage()], 500);
        }
    }
}
