<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use App\Models\Admin;
use App\Models\adminToken;


class AdminController extends Controller
{
    public function create(Request $request)
    {
        $admin = new Admin;
        $admin->adminName = $request->adminName;
        $admin->phoneNumber = $request->phoneNumber;
        $admin->email = $request->email;
        $originalFileName = $request->file('image')->getClientOriginalName();
        $hashedFileName = $request->file('image')->storeAs('avatars', $originalFileName, 'public');
        $admin->Avatar =  $hashedFileName;
        $admin->password = hash::make($request->password);
        $admin->usertype = 0;
        $admin->save();
        $token = bin2hex(random_bytes(32));
        $admin->tokens()->create(['token' => $token]);

        return response()->json(['message' => 'Admin created successfully', 'token' => $token, 'admin' => $admin], 201);
    }

    public function getadmin(Request $request)
    {
        try {
            $admin = Admin::first();

            if ($admin) {
                return response()->json(['message' => 'Admin data retrieved successfully', 'admin' => $admin], 200);
            } else {
                return response()->json(['message' => 'Admin not found', 'error' => 'not_found'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving admin data', 'error' => $e->getMessage()], 500);
        }
    }

    public function update(Request $request, $adminId)
    {
        try {
            // $adminId = $request->adminId;
            $admin = Admin::find($adminId);
            if (!$admin) {
                return response()->json(['message' => 'Admin not found', 'error' => 'not_found'], 404);
            }
            $request->validate([
                'adminName' => 'required|string',
                'phoneNumber' => 'required|string',
                'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
                'password' => 'required|string|min:6',
                'email' => 'required'
            ]);
            $admin->adminName = $request->adminName;
            $admin->phoneNumber = $request->phoneNumber;
            $admin->email = $request->email;
            if ($request->hasFile('image')) {
                Storage::disk('public')->delete('/' . $admin->Avatar);
                $originalFileName = $request->file('image')->getClientOriginalName();
                $hashedFileName = $request->file('image')->storeAs('avatars', $originalFileName, 'public');
                $admin->Avatar = $hashedFileName;
            }
            $admin->password = hash::make($request->password);
            $admin->save();
            return response()->json(['message' => 'Admin updated successfully', 'admin' => $admin], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating admin', 'error' => $e->getMessage()], 500);
        }
    }

    public function login(Request $request)
    {
        $admin = Admin::where('email', $request->email)->first();
        // dd($admin);

        if ($admin && Hash::check($request->password, $admin->password)) {
            $token = bin2hex(random_bytes(32));
            $admin->tokens()->create(['token' => $token]);
            return response()->json(['token' => $token, 'message' => 'Login successful'], 200);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function logout(Request $request)
    {
        $adminToken = adminToken::where('token',$request->header('Authorization'))->first();
        if($adminToken){
            $adminToken->delete();
            return response()->json(['message' => 'Logout successful'], 200);
        }else{
            return response()->json(['message' => 'Admin is not login yet'], 401);
        }
    }
}
