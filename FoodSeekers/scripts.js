var step1Visited = false;
var step2Visited = false;
var step3visited = false;
var reminderShown = false;
var currPlayer;

var step1Player, step2Player, step3Player;
function onYouTubeIframeAPIReady() {
  step1Player = new YT.Player('step1', {
		height: "486",
		width: "720",
		videoId: "Imqy7llo0TU",
		playerVars: {
			controls: 0,
			rel: 0,
			showinfo: 0
		},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

	step2Player = new YT.Player('step2', {
		height: "486",
		width: "720",
		videoId: "suYZEOLkC_w",
		playerVars: {
			controls: 0,
			rel: 0,
			showinfo: 0
		},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });

	step3Player = new YT.Player('step3', {
		height: "486",
		width: "720",
		videoId: "UNxgREMOohk",
		playerVars: {
			controls: 0,
			rel: 0,
			showinfo: 0
		},
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}



function onPlayerReady() {
	console.log("ready");
};

function onPlayerStateChange() {
	console.log("state changed");
};

$(".reminder-popup").hide();

$(".video-popup").hide();
$("#toFood").hide();
$("#toTea").hide();
$("#toHome").hide();
$("#home circle.st1").css("fill", "black");

$("#home circle.st1").click(function() {
	$("#home circle.st1").css("fill", "red");
	step1Visited = true;
	currPlayer = step1Player;
	currPlayer.playVideo();
  $("#vidWindow1").fadeIn();
  $("#food circle.st1").css("fill", "black");
  $("#toFood").show();
  $("body").css({
    "background": 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0)), url("assets/step1.png")',
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "-o-background-size": "cover",
    "background-size": 'cover',
    "margin": "0"
  });
});

$("#food circle.st1").click(function() {
	if(step1Visited){
		$("#food circle.st1").css("fill", "red");
		step2Visited = true;
		currPlayer = step2Player;
		currPlayer.playVideo();
		$("#vidWindow2").fadeIn();
  	$("#tea circle.st1").css("fill", "black");
  	$("#toTea").show();
    $("body").css({
      "background": 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0)), url("assets/step2.jpg")',
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      "background-size": 'cover',
      "margin": "0"
    });
	}
});

$("#tea circle.st1").click(function() {
	if (step2Visited){
		$("#tea circle.st1").css("fill", "red");
		step3visited = true;
		currPlayer = step3Player;
		currPlayer.playVideo();
		$("#vidWindow3").fadeIn();
  	$("#toHome").show();
    $("body").css({
      "background": 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0)), url("assets/step3.png")',
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      "background-size": 'cover',
      "margin": "0"
    });
	}
});

$(".close").click(function() {
	currPlayer.pauseVideo();
	currPlayer.seekTo(0);
  $(".video-popup").fadeOut();
	if(step3visited && !reminderShown){
		$(".reminder-popup").fadeIn();
		reminderShown = true;
	}
});

$(".reminder-close").click(function() {
  $(".reminder-popup").fadeOut();
	$('html, body').animate({
				scrollTop: $("body").offset().top + $(window).height()
	}, 1000);
});

$("#home circle.st1").hover(function() {
	$("#nyu").fadeIn();
	$("#nyu").css({
		"top": (event.pageY-25)+"px",
		"left": (event.pageX+25)+"px",
	})
}, function(){
	$("#nyu").fadeOut();
});

$("#food circle.st1").hover(function() {
	$("#restaurant").fadeIn();
	$("#restaurant").css({
		"top": (event.pageY-25)+"px",
		"left": (event.pageX-140)+"px",
	})
}, function(){
	$("#restaurant").fadeOut();
});

$("#tea circle.st1").hover(function() {
	$("#karak").fadeIn();
	$("#karak").css({
		"top": (event.pageY-25)+"px",
		"left": (event.pageX+25)+"px",
	})
}, function(){
	$("#karak").fadeOut();
});
