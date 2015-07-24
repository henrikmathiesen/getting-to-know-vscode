/// <reference path="../typings/jquery/jquery.d.ts"/>
(function(){
	
	// We get good jQuery intellisence after fetching from DefinitelyTyped
	
	console.log('Hello World!');
	
	$('div').on('click', function(){
		console.log('div clicked');
	});
	
})();