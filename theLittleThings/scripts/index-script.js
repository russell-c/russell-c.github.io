$(".img2").hide();
$(".panel").hide();
$("#panel-1").show();

var origLengths = [449, 358, 516, 320, 518, 481]; //original widths of each image
var scaleFactor = 0.80; //determines the scaling of each panel

for (var i = 0; i < origLengths.length; i++) {
  $("#panel-"+(i+1)).css("width", (origLengths[i]*scaleFactor)+"px"); //calculate width of each panel as a percentage of original image size
}

$(".comic-container").css("width", (((origLengths[0]*scaleFactor)+(origLengths[1]*scaleFactor)+(origLengths[2]*scaleFactor))/12.64)+"%"); //calculate the width of the comic container based on the size of the panels

var showNext = 2; //determines next panel to be shown

$(".panel").hover(function() {
  var id = this.id;
  $("#"+id+" .img1").hide(0, function() { //hide first image and show second one
    $("#"+id+" .img2").show(0);
  });
}, function() {
  var id = this.id;
  $("#"+id+" .img2").hide(0, function() { //hide second image and show first one
    $("#"+id+" .img1").show(0);
  });
});

$(".infoBtn").click(function() {
  $(".info-panel").fadeToggle(); //show or hide instructions
});

$(".nextBtn img").hover(function() { //change display of next button on hover
  $(this).attr("src", "assets/buttons/nextBtn2.png");
  $(".nextTxt").show();
}, function() {
  $(this).attr("src", "assets/buttons/nextBtn.png");
  $(".nextTxt").hide();
});

$(".nextBtn img").click(function() {

  if(showNext === 3){ //hide instructions before third panel is shown
    $(".info-panel").fadeOut();
  }

  $("#panel-"+showNext).fadeIn();
  showNext++;

  if(showNext === 7){ //hide next button after last panel is shown
    $(".next-panel").hide();
  }
  if(showNext === 5) { //scroll down to the bottom of the page after fourth panel is shown
    $('html, body').animate({ //saw this method on several sites before implementing, definitely didn't come up with this on my own
          scrollTop: $("body").offset().top + $(window).height()
    }, 1000);
  }
});
