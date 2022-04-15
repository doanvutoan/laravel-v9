@extends('permission::layouts.master')

@section('content')
    <div id="app"></div>

    <h1>Hello World</h1>
    toan hello
    <p>
        This view is loaded from module: {!! config('permission.name') !!}
    </p>
@endsection
