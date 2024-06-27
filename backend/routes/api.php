<?php

use App\Http\Controllers\AboutusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CoupanController;
use App\Http\Controllers\v1\ProductController;
use App\Http\Controllers\SubcategoryController;
use App\Http\Controllers\DoctorsController;
use App\Http\Controllers\FooterController;
use App\Http\Controllers\LabController;
use App\Http\Controllers\HeaderController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\LabpetientController;
use App\Http\Controllers\LabtestController;
use App\Http\Controllers\SocileMidiaController;

use function Ramsey\Uuid\v1;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/', [UserController::class, 'index']);
Route::post('create-Registration', [UserController::class, 'create']);
Route::get('get-all-user', [UserController::class, 'getuser']);
Route::get('get-one-user', [UserController::class, 'getoneUser']);
Route::post('get-one-user', [UserController::class, 'update']);
Route::post('login-user', [UserController::class, 'login']);
Route::post('logout-user', [UserController::class, 'logout']);


Route::post('/admin-create', [AdminController::class, 'create']);
Route::post('/admin-data', [AdminController::class, 'getadmin']);
Route::post('/admin-update/{adminId}', [AdminController::class, 'update']);
Route::post('/admin/login', [AdminController::class, 'login']);
// Route::middleware('admin.auth')->group(function () {
Route::post('/admin/logout', [AdminController::class, 'logout']);
Route::resource('brands', BrandController::class);
Route::resource('categories', CategoryController::class);
// });
Route::get('/Get-all-Sub-Category', [SubcategoryController::class, 'index']);
Route::get('/Get-all-Sub-Category-with-catergory', [SubcategoryController::class, 'getcetegory']);

Route::post('/Create-Sub-Category', [SubcategoryController::class, 'create']);
Route::get('/Get-Sub-Category-by-category/{id}', [SubcategoryController::class, 'getsubcategorybycatid']);
Route::post('/Update-Sub-Category/{SubcategoryId}', [SubcategoryController::class, 'update']);
Route::post('/Get-one-Sub-Category/{SubcategoryId}', [SubcategoryController::class, 'getOne']);
Route::post('/Delet-Sub-Category/{SubcategoryId}', [SubcategoryController::class, 'delete']);


Route::post('/product/create', [ProductController::class, 'createproduct']);
Route::post('/product/get-one-product/{productId}', [ProductController::class, 'getoneproduct']);
Route::post('/product/get-all-product', [ProductController::class, 'showproduct']);
Route::get('/product/get-product-image/{productId}', [ProductController::class, 'showproduct']);
Route::post('/product/update-product/{productId}', [ProductController::class, 'update']);
Route::post('/product/delete-product/{productId}', [ProductController::class, 'destroy']);
Route::post('/product/get-all-product-category', [ProductController::class, 'getproductbycategory']);
Route::post('/product/get-all-product-by-subcategory', [ProductController::class, 'getproductbysub_category']);



Route::get('/Get-all-Doctors', [DoctorsController::class, 'index']);
Route::post('/Create-Doctors', [DoctorsController::class, 'create']);
Route::post('/Update-Doctors/{id}', [DoctorsController::class, 'update']);
Route::get('/Get-One-Doctors/{id}', [DoctorsController::class, 'getOne']);
Route::post('/Delete-Doctors/{$id}', [DoctorsController::class, 'delete']);

Route::get('/Get-all-Labcategories', [LabController::class, 'getalllabcategory']);
Route::post('/Create-Labcategories', [LabController::class, 'createlabcategory']);
Route::post('/Update-Labcategories/{id}', [LabController::class, 'updatelabcategory']);
Route::get('/Get-One-Labcategories/{id}', [LabController::class, 'getonelabcategory']);
Route::post('/Delete-Labcategories/{id}', [LabController::class, 'deletecategory']);
Route::post('/publishe-Labcategories/{id}', [LabController::class, 'publishlabcategory']);



Route::get('/Get-all-labs', [LabController::class, 'index']);
Route::post('/Create-labs', [LabController::class, 'create']);
Route::post('/Update-lab/{id}', [LabController::class, 'update']);
Route::get('/Get-One-lab/{id}', [LabController::class, 'getOne']);
Route::post('/publishe-Lab/{id}', [LabController::class, 'publishlab']);
Route::post('/Delete-lab/{id}', [LabController::class, 'delete']);

Route::get('/Get-all-labtest', [LabtestController::class, 'index']);
Route::post('/Create-labtest', [LabtestController::class, 'create']);
Route::post('/Update-labtest/{id}', [LabtestController::class, 'update']);
Route::get('/Get-One-labtest/{id}', [LabtestController::class, 'getOne']);
Route::post('/publishe-labtest/{id}', [LabtestController::class, 'publish']);
Route::post('/Delete-labtest/{id}', [LabtestController::class, 'delete']);

Route::get('/Get-all-header', [HeaderController::class, 'index']);
Route::post('/Create-header', [HeaderController::class, 'create']);
Route::post('/Update-header/{id}', [HeaderController::class, 'update']);
Route::get('/Get-One-header/{id}', [HeaderController::class, 'getOne']);
Route::post('/Delete-header/{id}', [HeaderController::class, 'delete']);
Route::post('/publish-header/{id}', [HeaderController::class, 'publish']);

Route::get('/Get-all-homepage', [HomepageController::class, 'index']);
Route::post('/Create-homepage', [HomepageController::class, 'create']);
Route::post('/Update-homeopage/{id}', [HomepageController::class, 'update']);
Route::get('/Get-One-homepage/{id}', [HomepageController::class, 'getOne']);
Route::post('/Delete-homepage/{id}', [HomepageController::class, 'delete']);

Route::get('/Get-all-Productdetailbanner', [ProductdetailbannerController::class, 'index']);
Route::post('/Create-Productdetailbanner', [ProductdetailbannerController::class, 'create']);
Route::post('/Update-Productdetailbanner/{id}', [ProductdetailbannerController::class, 'update']);
Route::get('/Get-One-Productdetailbanner/{id}', [ProductdetailbannerController::class, 'getone']);
Route::post('/Delete-Productdetailbanner/{id}', [ProductdetailbannerController::class, 'delete']);

Route::get('/Get-all-pages', [PagesController::class, 'index']);
Route::post('/Create-pages', [PagesController::class, 'create']);
Route::post('/Update-pages/{id}', [PagesController::class, 'update']);
Route::get('/Get-One-pages/{id}', [PagesController::class, 'getone']);
Route::post('/Delete-pages/{id}', [PagesController::class, 'delete']);
Route::post('/publish-pages/{id}', [PagesController::class, 'publish']);

Route::get('/Get-About-us', [AboutusController::class, 'index']);
Route::post('/Update-About-us/{id}', [AboutusController::class, 'update']);

Route::get('/Get all footer', [FooterController::class, 'index']);
Route::post('/Create-footer', [FooterController::class, 'create']);
Route::post('/Update-footer/{id}', [FooterController::class, 'update']);
Route::post('/Delete-footer/{id}', [FooterController::class, 'delete']);
Route::post('/publish-footer/{id}', [FooterController::class, 'publish']);

Route::get('/Get-all-Auth', [SocileMidiaController::class, 'index']);
Route::post('/Create-Auth', [SocileMidiaController::class, 'create']);
Route::get('/Get-One-Auth/{id}', [SocileMidiaController::class, 'getone']);
Route::post('/Update-Auth/{id}', [SocileMidiaController::class, 'update']);

Route::get('/Get-all-carts ', [CartController::class, 'index']);
Route::post('/Create-carts', [CartController::class, 'create']);
Route::get('/Get-One-carts/{id}', [CartController::class, 'getOneCart']);
Route::post('/Update-carts/{id}', [CartController::class, 'update']);
Route::post('/Delete-carts/{id}', [CartController::class, 'deleteCart']);
Route::post('/get-carts/user/{userid}', [CartController::class, 'getCartsByUserId']);

Route::get('/Get-all-coupans ', [CoupanController::class, 'index']);
Route::post('/Create-coupans', [CoupanController::class, 'create']);
Route::get('/Get-One-coupans/{id}', [CoupanController::class, 'getone']);
Route::post('/Update-coupans/{id}', [CoupanController::class, 'update']);
Route::post('/Delete-coupans/{id}', [CoupanController::class, 'delete']);
Route::post('/get-coupans/product/{productid}', [CoupanController::class, 'getcoupanByproductid']);
Route::post('/get-coupans/category/{categoryid}', [CoupanController::class, 'getcoupanBycategoryid']);

Route::get('/Get-all-lab-pateint', [LabpetientController::class, 'index']);
Route::post('/Create-lab-pateint', [LabpetientController::class, 'creat']);
Route::get('/Get-One-lab-pateint/{id}', [LabpetientController::class, 'getone']);
Route::post('/Update-lab-pateint/{id}', [LabpetientController::class, 'update']);
Route::post('/Delete-lab-pateint/{id}', [LabpetientController::class, 'deleteCart']);

Route::get('/token', function () {
    return csrf_token();
});