<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $fillable = [
        'vegetables',
        'fruit',
        'grains',
        'meat',
        'sugar'

    ];
}
