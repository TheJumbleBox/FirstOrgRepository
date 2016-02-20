@extends('app')

@section('body')



        {!! Form::open(['url'=>'food']) !!}

            @include('form', ['submitButtonText' => 'Create food Items'])

        {!! Form::close() !!}  </div>




        @if($errors->any())
            <ul class="alert alert-danger">

                @foreach($errors->all() as $error)
                    <li>{{ $error }}</li>

                @endforeach

            </ul>
        @endif


@stop('body')

