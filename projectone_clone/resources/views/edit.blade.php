@extends('app')

@section('body')

<h2>Edit</h2>


         {!! Form::model($food, ['method' => 'PATCH', 'url'=>'food/' . $food->id]) !!}

              @include('form', ['submitButtonText' => 'Update food Items'])

        {!! Form::close() !!}  </div>




@if($errors->any())
    <ul class="alert alert-danger">

        @foreach($errors->all() as $error)
            <li>{{ $error }}</li>

        @endforeach

    </ul>
@endif


@stop('body')