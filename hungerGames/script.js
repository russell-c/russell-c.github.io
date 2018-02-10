$(".header").hide(0); //hides the header bar upon page load so splashscreen is only div loaded
$(".main-container").hide(0); //hides the main div upon page load so splashscreen is only div loaded

var count = 1; //initialising counter for picture slider
var max = 7; //initialising max value for picture slider

$("#gallery-img").attr("src", "images/pic"+count+".png"); //initialising first picture upon page load

$(".header-links a").click(function(){ //creates the scrolling animation to the selected section
  var offset = -67; //header bar is 67px high so this offset is needed to scroll to the position where the header isn't blocking anything
  var section = $(this).attr("href");
  $('html, body').animate({ //saw this method on several sites before implementing, definitely didn't come up with this on my own
        scrollTop: $(section).offset().top + offset
  }, 1000);
});

$("#enterBtn").click(function(){ //fades out the splashcreen and shows the rest of the page
  $("#crunch")[0].play(); //sound effect for immersion
  $(this).parent().fadeOut(500);
  $(".header").show(0);
  $(".main-container").show(0);
});

$("#left-arrow").hover(function(){ //changes the color of the arrow when it is hovered over
  $(this).css("color", "yellow");
}, function() {
  $(this).css("color", "rgba(250, 65, 20, 0.5)");
});

$("#right-arrow").hover(function(){ //changes the color of the arrow when it is hovered over
  $(this).css("color", "yellow");
}, function() {
  $(this).css("color", "rgba(250, 65, 20, 0.5)");
});

$("#left-arrow").click(function(){ //decrements the count so that the picture displayed in the gallery changes to the previous one
  count = count-1;
  if(count < 1){ //cycles back to the end of the list
    count = max;
  }
  $("#gallery-img").attr("src", "images/pic"+count+".png"); //changes the src attribute of the img tag so picture changes
});

$("#right-arrow").click(function(){ //increments the count so that the picture displayed in the gallery changes to the next one
  count = count+1;
  if(count > max){ //cycles back to the front of the list
    count = 1;
  }
  $("#gallery-img").attr("src", "images/pic"+count+".png"); //changes the src attribute of the img tag so picture changes
});
