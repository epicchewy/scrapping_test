function getData(){
	$.ajax({
	    type: 'GET',
		url: "http://localhost:8888/",
		data: {
			
		},
		dataType: 'jsonp'
		}).done(function(response){
	        console.log(response);
	        $("#display").text(response);
		}).fail(function(error){
	        console.log(error.statusText);
	});
}