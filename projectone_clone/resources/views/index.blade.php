@extends('app')



@section('body')

<h1>Foods!</h1>


<a href ="food/{!! $food->id !!}"><h2>{{ $food->vegetables }}</h2></a>
<a href ="food/{!! $food->id !!}"><h2>{{ $food->fruit }}</h2></a>
<a href ="food/{!! $food->id !!}"><h2>{{ $food->grains }}</h2></a>
<a href ="food/{!! $food->id !!}"><h2>{{ $food->meat }}</h2></a>
<a href ="food/{!! $food->id !!}"><h2>{{ $food->sugar }}</h2></a>

@stop('body')