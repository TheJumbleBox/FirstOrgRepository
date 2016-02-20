<?php

//Fun fact, these need to be in order. If you have the /{id} before any others, it will overwrite them and use its method.

Route::resource('food', 'FoodController');


