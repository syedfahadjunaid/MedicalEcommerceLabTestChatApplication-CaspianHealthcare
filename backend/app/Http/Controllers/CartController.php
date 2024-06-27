<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Carts;

class CartController extends Controller
{
    public function index(){
        try {
            $carts = Carts::join('products', 'carts.product_id', '=', 'products.id')
                ->join('users', 'carts.user_id', '=', 'users.id')
                ->select('carts.*', 'products.name as product_name', 'users.name as user_name')
                ->get();

            return response()->json(['message' => 'Cart data displayed successfully', 'carts' => $carts], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving cart data', 'error' => $e->getMessage()], 500);
        }
    }

    public function create(Request $request){
        try {
            $cart = new Carts();
            $cart->user_id = $request->user_id;
            $cart->product_id = $request->product_id;
            $cart->number_of_item = $request->number_of_item;
            $cart->per_item_price = $request->per_item_price;
            $cart->total_price = $request->total_price;
            $cart->save();
            return response()->json(['message' => 'Cart created successful', 'Cart' => $cart], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error created Cart data', 'error' => $e->getMessage()], 500);
        }
    }

    public function getOneCart($id){
        try {
            $cart = Carts::join('products', 'carts.product_id', '=', 'products.id')
                ->join('users', 'carts.user_id', '=', 'users.id')
                ->select('carts.*', 'products.name as product_name', 'users.name as user_name')
                ->where('carts.id', $id)
                ->first();

            if (!$cart) {
                return response()->json(['message' => 'Cart not found'], 404);
            }

            return response()->json(['message' => 'Cart data retrieved successfully', 'cart' => $cart], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving cart data', 'error' => $e->getMessage()], 500);
        }
    }

    public function deleteCart($id){
        try {
            $cart = Carts::find($id);

            if (!$cart) {
                return response()->json(['message' => 'Cart not found'], 404);
            }

            $cart->delete();

            return response()->json(['message' => 'Cart deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting cart', 'error' => $e->getMessage()], 500);
        }
    }
    public function update(Request $request, $id){
        try {
            $cart =  Carts::find($id);
            $cart->user_id = $request->user_id;
            $cart->product_id = $request->product_id;
            $cart->number_of_item = $request->number_of_item;
            $cart->per_item_price = $request->per_item_price;
            $cart->total_price = $request->total_price;
            $cart->save();
            return response()->json(['message' => 'Cart updated successful', 'Cart' => $cart], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error Updating Cart data', 'error' => $e->getMessage()], 500);
        }
    }
    public function getCartsByUserId($userId){
        try {
            $carts = Carts::where('carts.user_id', $userId)
                ->join('products', 'carts.product_id', '=', 'products.id')
                ->join('users', 'carts.user_id', '=', 'users.id')
                ->select('carts.*', 'products.name as product_name', 'users.name as user_name')
                ->get();

            return response()->json(['message' => 'Carts retrieved successfully', 'carts' => $carts], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving carts', 'error' => $e->getMessage()], 500);
        }
    }

}
