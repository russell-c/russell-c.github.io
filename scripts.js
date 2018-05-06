var lastScrollTop = 85;

$(window).scroll(function(){
  var st = $(this).scrollTop();
  if(st > lastScrollTop){
    $(".header").css({
      "position": "fixed",
      "top": "0",
      "display": "flex",
      "flex-direction": "row",
      "width": "100%",
      "color": "white",
      "text-align": "center"
    });
  } else{
    $(".header").css({
      "position": "absolute",
      "top": "85px",
      "display": "flex",
      "flex-direction": "row",
      "width": "100%",
      "color": "white",
      "text-align": "center"
    });
  }
})

$("#hungerGames").click(function() {
  window.location.href = "hungerGames/index.html"
});

$("#storyLine").click(function() {
  window.location.href = "storyLine/splash.html"
});

$("#theLittleThings").click(function() {
  window.location.href = "theLittleThings/welcome.html"
});

$("#foodSeekers").click(function() {
  window.location.href = "FoodSeekers/index.html"
});

$("#memories").click(function() {
  window.location.href = "memories/index.html"
});

$("#hungerGames").hover(function() {
  $("#hungerGames").css({
    "background": 'linear-gradient(rgba(250, 75, 20, 0.8), rgba(250, 75, 20, 0.8)), url("assets/hgbg.jpg")',
    "background-size": 'cover'
  })
}, function() {
  $("#hungerGames").css({
    "background": 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/hgbg.jpg")',
    "background-size": 'cover'
  })
});

$("#storyLine").hover(function() {
  $("#storyLine").css({
    "background": 'linear-gradient(rgba(255, 0, 90, 0.8), rgba(255, 0, 90, 0.8)), url("assets/slbg.jpg")',
    "background-size": 'cover'
  })
}, function() {
  $("#storyLine").css({
    "background": 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/slbg.jpg")',
    "background-size": 'cover'
  })
});

$("#theLittleThings").hover(function() {
  $("#theLittleThings").css({
    "background": 'linear-gradient(rgba(81, 37, 129, 0.8), rgba(81, 37, 129, 0.8)), url("assets/tltbg.jpg")',
    "background-size": 'cover'
  })
}, function() {
  $("#theLittleThings").css({
    "background": 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/tltbg.jpg")',
    "background-size": 'cover'
  })
});

$("#foodSeekers").hover(function() {
  $("#foodSeekers").css({
    "background": 'linear-gradient(rgba(156, 226, 235, 0.8), rgba(156, 226, 235, 0.8)), url("assets/fsbg.jpg")',
    "background-size": 'cover'
  })
}, function() {
  $("#foodSeekers").css({
    "background": 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/fsbg.jpg")',
    "background-size": 'cover'
  })
});

$("#memories").hover(function() {
  $("#memories").css({
    "background": 'linear-gradient(rgba(255, 192, 203, 0.8), rgba(255, 192, 203, 0.8)), url("assets/mbg.jpg")',
    "background-size": 'cover'
  })
}, function() {
  $("#memories").css({
    "background": 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/mbg.jpg")',
    "background-size": 'cover'
  })
});

$(".header-link").click(function() {
  var offset = -85;
  var section = $(this).attr("href");
  $('html, body').animate({
        scrollTop: $(section).offset().top + offset
  }, 1000);
})

$(".menu-btn").click(function(){
  $(".menu").slideToggle("fast");
})
