<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\UserToken;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index()
    {
        return response()->json([
            'name' => "My hu done",
            "work" => "export and import ",
            "code" => 200
        ]);
    }

    public function create(Request $request){
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:6|confirmed', // 'confirmed' checks if password_confirmation field is present and matches 'password'
                'mobile_number' => 'required|numeric|digits:10',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 400);
            }
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = hash::make($request->password);
            $user->mobile_number = $request->mobile_number;
            $user->save();
            return response()->json(['message' => 'User created successfully', 'user' => $user], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error creating user', 'error' => $e->getMessage()], 500);
        }
    }

    public function getuser(){
        try {
            $users = User::all();

            return response()->json(['message' => 'All users retrieved successfully', 'users' => $users], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving users', 'error' => $e->getMessage()], 500);
        }
    }

    public function getoneUser($id){
        try {
            $user = User::find($id);
            if (!$user) {
                return response()->json(['message' => 'User not found'], 404);
            }
            return response()->json(['message' => 'User details retrieved successfully', 'user' => $user], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving user details', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $id){
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email,' . $id,
                'password' => 'nullable|min:6',
                'mobile_number' => 'required|numeric|digits:10',
                'profile_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the file types and size as needed
            ]);
    
            if ($validator->fails()) {
                return response()->json(['message' => 'Validation failed', 'errors' => $validator->errors()], 400);
            }
    
            $user = User::find($id);
            if (!$user) {
                return response()->json(['message' => 'User not found'], 404);
            }
            // Update user data
            $user->name = $request->name;
            $user->email = $request->email;
            $user->mobile_number = $request->mobile_number;
            // Update password if provided
            if ($request->filled('password')) {
                $user->password = hash::make($request->password);
            }
            // Update profile image if provided
            if ($request->hasFile('profile_image')) {
                $file = $request->file('profile_image');
                $path = $file->storeAs('public/user', 'user_' . $id . '.' . $file->getClientOriginalExtension());
                $user->profile_image = str_replace('public/', '', $path);
            }
            $user->save();
            return response()->json(['message' => 'User updated successfully', 'user' => $user], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating user', 'error' => $e->getMessage()], 500);
        }
    }

    public function login(Request $request){
        $user = User::where('email', $request->email)->first();
        // dd($admin);

        if ($user && Hash::check($request->password, $user->password)) {
            $token = bin2hex(random_bytes(32));
            $user->tokens()->create(['token' => $token]);
            return response()->json(['token' => $token, 'message' => 'Login successful'], 200);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    
    public function logout(Request $request){
        $adminToken = UserToken::where('token', $request->header('Authorization'))->first();
        if ($adminToken) {
            $adminToken->delete();
            return response()->json(['message' => 'Logout successful'], 200);
        } else {
            return response()->json(['message' => 'Admin is not login yet'], 401);
        }
    }
}
