var step1Visited = false;
var step2Visited = false;
var step3visited = false;
var reminderShown = false;

$(".reminder-popup").hide();

$(".video-popup").hide();
$("#toFood").hide();
$("#toTea").hide();
$("#toHome").hide();
$("#home circle.st1").css("fill", "red");

$("#home circle.st1").click(function() {
	step1Visited = true;
  $("#vidWindow1").fadeIn();
  $("#food circle.st1").css("fill", "red");
  $("#toFood").show();
  $("body").css("background-image","url(assets/step1.png)");
});

$("#food circle.st1").click(function() {
	if(step1Visited){
		step2Visited = true;
		$("#vidWindow2").fadeIn();
  	$("#tea circle.st1").css("fill", "red");
  	$("#toTea").show();
   	$("body").css("background-image","url(assets/step2.jpg)");
	}
});

$("#tea circle.st1").click(function() {
	if (step2Visited){
		step3visited = true;
		$("#vidWindow3").fadeIn();
  	$("#toHome").show();
  	$("body").css("background-image","url(assets/step3.png)");
	}
});

$(".close").click(function() {
  $(".video-popup").fadeOut();
	if(step3visited && !reminderShown){
		$(".reminder-popup").fadeIn();
		reminderShown = true;
	}
});

$(".reminder-close").click(function() {
  $(".reminder-popup").fadeOut();
});
