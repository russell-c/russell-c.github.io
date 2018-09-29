$(document).scrollTop(0);
$(document).ready(function(){
  var dates = ["Feb 3, 2018", "Apr 3, 2018", "Nov 27, 2016", "Apr 6, 2018", "Mar 16, 2018", "Apr 6, 2018", "Mar 16, 2018", "Mar 13, 2018", "Mar 12, 2018", "Dec 20, 2017", "Dec 20, 2017", "Dec 16, 2017", "May 26, 2017", "Nov 2, 2017", "Oct 15, 2017"];
  var blurbs = [
    "This was taken when we finally went to Atlantis. It took so long for us to go because it was so cold and even when we went it was freezing!! Crazy times...",
    "This was at Abd el Wahab when the kids took us out so Matt could try Middle Eastern cuisine. You know I'm not a big fan but that expression on my face says otherwise lol",
    "I don't even know what was happening here but this picture is so us. I love it so much lmao. The blur. The finger on the lens. Perfection.",
    "Russell and Iman take the mangroves, which can only mean one thing... bad selfies. This pic is very much one of the ones that didn't make the final cut but I still wanted to include it.",
    "Date night at Vapiano, with the kids in tow. One of the coldest, rainiest nights we were there but it was still a good night out with my b.",
    "At the mangroves again, this time having someone take our pics and not trying to take selfies. Doesn't mean it didn't take a few attempts again lol. By the way this swimsuit was fucking smoking on you.",
    "Us bailing the kids out after they tried and failed to go out by themselves lol. Mama Iman always comes through. Where would anyone be without you?",
    "The real works of art in the Rijksmuseum. This is actually my favourite pic of us. Just look at the glow and my rosy Valenine lips, mmmm....",
    "First day out in Ammydam. Look at the innocent faces, the oddly pristine looking white shoes. They know not of the biting cold and the sex shops that lie ahead...",
    "Mushrif date night after we left Parker's. Walking around the park at dusk as the sun sets with my baby, name a more perfect end to a day. I dare you.",
    "Inside Parker's waiting on our Lotus Drama speculoos crumble cake and ice-cream. Funny how not even that was sweeter than you in this pic. I had to send this to my mom immediately after I took it.",
    "Getting ready to watch our first football match of many more to come :). Shame my eyesight was so bad I could barely see but it was so nice being there with you",
    "Schmnacking on some smoothies from Marketplace. You know I had to hit 'em with that Chunky Monkey while you drink that green sludge, gross...",
    "Our last dinner ever at Noodle House (RIP). I'll miss their delicious food and you scamming me into eating nasi goreng with shrimp in it. Stop trying to poison me :/",
    "And to cap it all off, the picture to end all pictures. Me (asleep), you (annoying me), a bed and some blankets. The recipe for a perfect morning."
  ]

  var isDisplayingImage = false;

  $("#gallery").show(0);
  $("#home-button").on('click', () => {
    var section = $("#home-button").attr('href');
    console.log(section);
    $('html, body').animate({
          scrollTop: $(section).offset().top
    }, 700, function() {
      $(".home-container").hide(0);
      $(".content-header").animate({
        opacity: "1"
      })
    });
  })

  $(".content-header a").hover(function(){
    $(this).css("color", "#5D2E8C");
  }, function(){
    $(this).css("color", "white");
  });

  $(".content-header a").on("click", function(){
    $(".content-box").hide(0);
    var section  = $(this).attr("href");
    $(section).show(0);
  });

  $(".image-box").hover(function() {
    $(this).children('.overlay').fadeIn();
    $(this).children().css({
      "width":"110%",
      "marginLeft": "-=13px",
    });
  }, function() {
    $(this).children().css({
      "width" : "100%",
      "marginLeft": "+=13px"
    });
    $(this).children('.overlay').fadeOut();
  });

  $("#closeImgBtn").on("click", function(){
    isDisplayingImage = false;
    $(".image-viewer").fadeOut("slow");
  });

  $(".image-box").on('click', function(){
    var src = $(this).children('img').attr('src');
    displayImage(src);
  });

  function displayImage(img) {
    $(".image-viewer img").attr('src', img);
    var num = parseInt(img.replace("img", "").replace(".jpg", ""), 10)-1;
    $(".image-viewer .text-box").text(blurbs[num]);
    isDisplayingImage = true;
    $(".image-viewer").fadeIn("slow");
  }

  var imgList = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg", "img13.jpg", "img14.jpg", "img15.jpg"]

  $(document).keydown(function(event){
    if (!isDisplayingImage) {
      return;
    }
    var img = $(".image-viewer img").attr('src');
    var num = parseInt(img.replace("img", "").replace(".jpg", ""), 10)-1;
    if(event.which == 37){
      displayImage(imgList[num-1]);
    } else if (event.which == 39) {
      displayImage(imgList[num+1]);
    }
  });

  $(window).scroll(function(){

    var st = $(this).scrollTop();
    // var winH = $(window).height();
    if(st > 0){
      $(".content-header").css({
        "position": "fixed",
        "top": "0",
        "display": "flex",
        "width": "100%",
        "height": "9vh",
        "z-index": "5",
        "justify-content": "space-around",
        "background": "linear-gradient(rgba(237, 84, 150, 1), rgba(237, 84, 150, 0.9))"
      });
    } else{
      $(".content-header").css({
        "position": "absolute",
        "top": "0",
        "display": "flex",
        "width": "100%",
        "height": "9vh",
        "justify-content": "space-around",
        "background": "linear-gradient(rgba(237, 84, 150, 1), rgba(237, 84, 150, 0.9))"
      });
    }
  });

  $(".list-heading ul li").hover(function() {
    $(this).css('color', 'rgba(237, 84, 150, 1)');
    $(this).animate({
      fontSize:'22px'
    }, 200);
  }, function() {
    $(this).animate({
      fontSize:'14px'
    }, 200);
    $(this).css('color', 'white');
  })

});
