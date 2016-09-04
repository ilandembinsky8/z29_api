/**
 * 
 */
var url="http://localhost:8080/tsofen-001/";

$(document).ready(function(){
	$("#getData").click(function (){
		var index=$("#index").val();
		
		$.get(url+"getFromServer2.jsp?index="+index,function(data){
			showData(data);
		});
	});
	});


