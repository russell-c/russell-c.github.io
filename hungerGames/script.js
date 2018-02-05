$(".header").hide(0);
$(".main-container").hide(0);

$(".header-links a").on("click", function(){
  var offset = -67; //Offset of 20px
  var section = $(this).attr("href");
  $('html, body').animate({
        scrollTop: $(section).offset().top + offset
  }, 1000);
});

$("#enterBtn").on("click", function(){
  $(this).parent().fadeOut(500);
  $(".header").show(0);
  $(".main-container").show(0);
})
