
$(document).ready(function(){
	$("#finalColor").css("background-color", "#FF0000");

	$("#colorRed").click(function(){
		$("#finalColor").css("background-color", $(this).css('background-color'));
		$(this).css("border","5px solid yellow");
		$("#colorGreen").css("border","0px");
		$("#colorBlue").css("border","0px");
	});	
	$("#colorGreen").click(function(){
		$("#finalColor").css("background-color", $(this).css('background-color'));
		$(this).css("border","5px solid yellow");
		$("#colorRed").css("border","0px");
		$("#colorBlue").css("border","0px");
	});	
	$("#colorBlue").click(function(){
		$("#finalColor").css("background-color", $(this).css('background-color'));
		$(this).css("border","5px solid yellow");
		$("#colorRed").css("border","0px");
		$("#colorGreen").css("border","0px");
	});	
});