$(".link-container").hide();

var sfx = new Howl({
  src: ['assets/typingsfx.mp3'],
  volume: 0.5,
  autoplay: true
})

var typer = new TypeIt('#sentence', {
  strings: ["What happens when a group of people from a university that has students from 115+", "nationalities come together to write a story?", "Come hear it from the students themselves."],
  speed: 15,
  autoStart: false,
  html: true,
  lifeLike: true,
  cursor: false,
  callback: function(){
    sfx.stop();
    $(".link-container").fadeIn("slow");
  }
});
