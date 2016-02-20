<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

use App\Food;

use App\Http\Requests\CreateFoodRequest;

class FoodController extends Controller
{



    public function show($id) {
        $food = Food::find($id);

        return view('index')->with('food', $food);

    }

    public function create() {

        return view('vendor.create');

    }


    public function store(CreateFoodRequest $request) {
        $input = $request->all();
        $food = Food::create($input);

        return redirect('food/'.$food->id);

    }

    public function edit($id) {
        $food = Food::find($id);

        return view('edit')->with('food', $food);

    }


    public function update($id, Request $request){
        $food = Food::find($id);
        $food->fill($request->all());
        $food->save();

        return redirect('food/'.$food->id);

    }


}










