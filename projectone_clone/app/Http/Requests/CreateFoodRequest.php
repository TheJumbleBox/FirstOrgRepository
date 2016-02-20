<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class CreateFoodRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'vegetables' => 'required|min:2',
            'fruit' => 'required|min:2',
            'grains' => 'required|min:2',
            'meat' => 'required|min:2',
            'sugar' => 'required|min:2'
        ];
    }
}
