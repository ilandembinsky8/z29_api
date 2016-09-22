/**
 * 
 */
var url="http://localhost:8080/Tsofen_Dynamic_group/";

$(document).ready(function(){
		
		$.get(url+"getFromServer3.jsp",function(data){
			showData(data);
		});
	});


