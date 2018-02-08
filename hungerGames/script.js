$(".header").hide(0);
$(".main-container").hide(0);
var pics = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg", "https://news.nationalgeographic.com/content/dam/news/photos/000/755/75552.ngsversion.1422285553360.adapt.1900.1.jpg", "https://www.petmd.com/sites/default/files/salmonella-infection-dogs.jpg"];
var count = 0;
$("#gallery-img").attr("src", pics[count]);

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
  if(count === -1){
    count = pics.length-1;
  }
  $("#gallery-img").attr("src", pics[count]);
});

$("#right-arrow").click(function(){
  count = count+1;
  if(count === pics.length){
    count = 0;
  }
  $("#gallery-img").attr("src", pics[count]);
});
