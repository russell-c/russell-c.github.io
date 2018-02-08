$(".header").hide(0);
$(".main-container").hide(0);
var count = 1;
var max = 7;
$("#gallery-img").attr("src", "images/pic"+count+".png");

$(".header-links a").click(function(){
  var offset = -67;
  var section = $(this).attr("href");
  $('html, body').animate({
        scrollTop: $(section).offset().top + offset
  }, 1000);
});

$("#enterBtn").click(function(){
  $(this).parent().fadeOut(500);
  $(".header").show(0);
  $(".main-container").show(0);
});

$("#left-arrow").hover(function(){
  $(this).css("color", "yellow");
}, function() {
  $(this).css("color", "rgba(250, 65, 20, 0.5)");
});

$("#right-arrow").hover(function(){
  $(this).css("color", "yellow");
}, function() {
  $(this).css("color", "rgba(250, 65, 20, 0.5)");
});

$("#left-arrow").click(function(){
  count = count-1;
  if(count < 1){
    count = max;
  }
  $("#gallery-img").attr("src", "images/pic"+count+".png");
});

$("#right-arrow").click(function(){
  count = count+1;
  if(count > max){
    count = 1;
  }
  $("#gallery-img").attr("src", "images/pic"+count+".png");
});
