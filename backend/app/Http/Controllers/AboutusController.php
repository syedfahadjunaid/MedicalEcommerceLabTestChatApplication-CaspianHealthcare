<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Aboutpages;

class AboutusController extends Controller
{
   public function index(){
    try{
        $aboutus = Aboutpages::all();
        return response()->json([$aboutus]);
    }catch (\Exception $e) {
        return response()->json(['message' => 'Error geting Abbout Us data','error' => $e->getMessage()], 500);
    }
   } 

   public function update(Request $request, $id){
    try{
        $aboutus = Aboutpages::find($id);
        $imageFile = $request->file('main_image');
        $originalFileName = $imageFile->getClientOriginalName();
        $hashedFileName = $imageFile->storeAs('Aboutus', $originalFileName, 'public');
        $aboutus->main_image =  $hashedFileName;
        $aboutus->title1 = $request->title1;
        $aboutus->text_for_title1 = $request->text_for_title1;
        $imageFile1 = $request->file('image1');
        $originalFileName1 = $imageFile1->getClientOriginalName();
        $hashedFileName1 = $imageFile->storeAs('Aboutus', $originalFileName1, 'public');
        $aboutus->image1 = $hashedFileName1 ;
        $imageFile2 = $request->file('image2');
        $originalFileName2 = $imageFile2->getClientOriginalName();
        $hashedFileName2 = $imageFile->storeAs('Aboutus', $originalFileName2, 'public');
        $aboutus->image2 = $hashedFileName2 ;
        $imageFile3 = $request->file('image3');
        $originalFileName3 = $imageFile3->getClientOriginalName();
        $hashedFileName3 = $imageFile->storeAs('Aboutus', $originalFileName3, 'public');
        $aboutus->image3 = $hashedFileName3 ;
        $aboutus->title2 = $request->title2;
        $aboutus->text_for_title2 = $request->text_for_title2;
        $imageCard = $request->file('card1');
        $originalcard = $imageCard->getClientOriginalName();
        $hascard = $imageFile->storeAs('Aboutus', $originalcard, 'public');
        $aboutus->card1 = $hascard ;
        $imageCard2 = $request->file('card2');
        $originalcard2 = $imageCard2->getClientOriginalName();
        $hascard2 = $imageFile2->storeAs('Aboutus', $originalcard2, 'public');
        $aboutus->card2 = $hascard2 ;
        $imageCard3 = $request->file('card3');
        $originalcard3 = $imageCard3->getClientOriginalName();
        $hascard3 = $imageFile3->storeAs('Aboutus', $originalcard3, 'public');
        $aboutus->card3 = $hascard3 ;
        $aboutus->title_for_card_1 = $request->title_for_card_1;
        $aboutus->title_for_card_2 = $request->title_for_card_2;
        $aboutus->title_for_card_3 = $request->title_for_card_3;
        $aboutus->text_for_card_1 = $request->text_for_card_1;
        $aboutus->text_for_card_2 = $request->text_for_card_2;
        $aboutus->text_for_card_3 = $request->text_for_card_3;
        $aboutus->save();
        return response()->json(['message'=>'About us pages Updated sucessfully', 'aboutus'=>$aboutus],201);
    }catch (\Exception $e) {
        return response()->json(['message' => 'Error retrieving Aboutus data', 'error' => $e->getMessage()], 500);
    }
   }
}

