var frames = ["assets/letter/1.png", "assets/letter/5.png", "assets/letter/9.png", "assets/letter/11.png"];
var current = 0;
$("#frame1").show();

var player;
var sfx = [];
var blinkSpeed = 400;

function blink() {
  $(".instructions").fadeIn(blinkSpeed, function(){
    $(".instructions").fadeOut(blinkSpeed, function(){
      $(".instructions").fadeIn(blinkSpeed, function(){
        $(".instructions").fadeOut(blinkSpeed, function(){
          sfx[0].play();
          $(".instructions").fadeIn(blinkSpeed, function(){
            $(".instructions").fadeOut(blinkSpeed, function() {
              $(".instructions").fadeIn(blinkSpeed, function(){
                $(".instructions").fadeOut(blinkSpeed, function(){
                  $(".instructions").fadeIn(blinkSpeed, function(){
                    $(".instructions").fadeOut(blinkSpeed, function(){
                      sfx[0].play();
                      $(".instructions").fadeIn(blinkSpeed, function(){
                        $(".instructions").fadeOut(blinkSpeed, function(){
                          $(".instructions").fadeIn(blinkSpeed, function(){
                            $(".instructions").fadeOut(blinkSpeed)
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
};

for (var i = 0; i < 4; i++) {
  sfx.push(new Howl({
    src: ["assets/paper-sounds/paper"+(i+1)+".wav"]
  }))
}

blink();

function onYouTubeIframeAPIReady() {
  player = new YT.Player('frame4', {
		height: "240",
		width: "320",
		videoId: "k_LfgdZJ3eQ",
		playerVars: {
			controls: 1,
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

function onPlayerStateChange(event) {
	if (event.data == 0) {
    $(".overlay").fadeOut(600);
    $("#frame4").fadeOut(600, function() {
      $("#frame5").fadeIn(600);
    });
    $(".startover").fadeIn(600);
  }
};

$(".stopmotion").click(function() {
  if (current<3) {
    current+=1;
    $(".frame").attr("src", frames[current]);
    sfx[current].play();
    if (current == 1) {
      $("#frame1").fadeOut(600, function() {
        $("#frame2").fadeIn(600);
      });
    }
    if (current == 2) {
      $("#frame2").fadeOut(600, function() {
        $("#frame3").fadeIn(600);
      });
    }
    if (current == 3) {
      $("#frame3").fadeOut(600, function() {
        $(".overlay").fadeIn(800);
        $("#frame4").fadeIn(600, function() {
          player.seekTo(0);
        });
      });
    }
  }
});

$(".startover p").hover(function() {
  $(this).css({
    "color": "#67ab9e",
    "cursor": "pointer"
  });
}, function() {
  $(this).css({
    "color": "pink",
    "cursor": "pointer"
  });
});


$(".startover p").click(function() {
  current = 0;
  $(".frame").attr("src", frames[current]);
  sfx[current].play();
  $("#frame5").fadeOut(600, function() {
    $("#frame1").fadeIn(600);
  });
  $(".startover").fadeOut();
})
