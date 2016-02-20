<div class="form-group"> 

    {!! Form::label('vegetables', 'Vegetable item:') !!}  

    {!! Form::text('vegetables', null, ['class' => 'form-control']) !!} 

</div>





  <div class="form-group"> 

    {!! Form::label('fruit', 'Fruit item:') !!}  

    {!! Form::text('fruit', null, ['class' => 'form-control']) !!} 

</div>   




<div class="form-group"> 

    {!! Form::label('meat', 'Meat item:') !!}  

    {!! Form::text('meat', null, ['class' => 'form-control']) !!}

</div>



  <div class="form-group"> 

    {!! Form::label('grains', 'Grain item:') !!}

          {!! Form::text('grains', null, ['class' => 'form-control']) !!}
     </div>  




<div class="form-group"> 

    {!! Form::label('sugar', 'Sugar item:') !!}

          {!! Form::text('sugar', null, ['class' => 'form-control']) !!} 
</div>




  <div>  {!! Form::submit($submitButtonText, ['class' => 'btn btn-primary form-control']) !!}   