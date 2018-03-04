$(".header").hide();
$(".story-container").hide();
$(".contributor-container").hide();
$(".instructions-container").hide();
$(".img-container").hide();
$(".sentence-container").hide();
$(".analyser-container").hide();

class Point {
  constructor(xVal, yVal, sound) {
    this.xVal = xVal;
    this.yVal = yVal;
    this.sound = sound;
  }
};

var locations = [
  [649, 209],
  [655, 176],
  [599, 145],
  [621, 190],
  [379, 212],
  [329, 140],
  [327, 166],
  [323, 150],
  [383, 173],
  [413, 138],
  [420, 165],
  [398, 136],
  [328, 117],
  [266, 308],
  [236, 308],
  [457, 273],
  [474, 256],
  [574, 269],
  [591, 271]
];

var pointsArr = [];
var lines = [];
var active = 0;
var canvas;
var played = false;
var count = 0, sizeCount;
var pan = 0.75;

var sizeArr = [20, 25, 30, 35, 30, 25];

var campusMap;
var contribPhotos = [];
var recs = [];

var sentences = [
  ["\"Deep, deep down in the ocean as I was minding my own business, I saw a small light overcome me.\"","Nisala - D2 - Feb 28, 2018 5:30pm"],
  ["\"It was an angler fish approaching me fast.\"","Sultan - D2 - Feb 28, 2018 5:32pm"],
  ["\"I didn't know what to do.\"", "Manas - Arts Centre - Feb 28, 2018 5:35pm"],
  ["\"I kept swimming as quickly as I can but a shark approached me from the other side.\"","Alia - Outside Arts Centre - Feb 28, 2018 5:40pm"],
  ["\"I didn't know what to do.\"","Matteo - Outside Campus Centre - Feb 28, 2018 5:44pm"],
  ["\"Forsaking all other options, I pulled out my lightsaber and decapitated the fish.\"","Maddie - Campus Centre Ground Floor - Feb 28, 2018 5:51pm"],
  ["\"At this point, the Imperial Sharktrooper called for reinforcements.\"","Shantanu - Campus Centre Ground Floor - Feb 28, 2018 5:53pm"],
  ["\"Then I saw a mermaid and asked her to bring all the dolphins she could get to help me to dissuade the sharks from eating me. The dolphins arrived and the sharks arrived as well and they are now facing each other.\"","Carlos - Campus Centre Ground Floor - Feb 28, 2018 5:55pm"],
  ["\"The dolphins and the sharks stared at each other for 5 minutes and started wagging their tails and clenching their teeth.\"","Natalie - Campus Centre First Floor - Feb 28, 2018 5:58pm"],
  ["\"The battle for the ocean began.\"","Tarik - Baraha - Feb 28, 2018 6:00pm"],
  ["\"I took out my sword and swung it across the tides as a turtle approached me from the reef nearby and asked me if she could join the war.\"","Angela - Baraha - Feb 28, 2018 6:05pm"],
  ["\"So when the turtle came to me to ask if she could join the war, I asked her to bring three pieces of coral from the reef nearby.\"","Jean - Library Staircase - Feb 28, 2018 6:11pm"],
  ["\"As soon as the turtle walked away, the shark came from behind and ate me.\"","Hayat - Library Cafe - Feb 28, 2018 6:14pm"],
  ["\"So here I am in the belly of the shark, fighting the hunger pangs that come from within. On the inside of his stomach I am scratching his underbelly, trying to get him to throw me out and hopefully get me back into the sea where I can finish the fight. Now the time has arrived and I am ready to be dejected from the shark\'s belly.\"","Mr. T - A2C Lobby - Feb 28, 2018 6:21pm"],
  ["\"The sky roared and lightning flashed across the sea. I rose from the shark\'s belly rejuvenated as a man, once more willing to start the war.\"","Juju - A2C Lobby - Feb 28, 2018 6:24pm"],
  ["\"There were too many lives involved and I felt responsible for that.\"","Mahrukh - Outside A5A - Feb 28, 2018 6:30pm"],
  ["\"But then again I had never been responsible for anyone except myself.\"","Archita - Outside A5A - Feb 28, 2018 6:34pm"],
  ["\"In my distress, I decided to swim through the the blood stained ocean to the shore.\"","Antony - Outside A6C - Feb 28, 2018 6:39pm"],
  ["\"Upon arriving back on shore, I looked out at the ocean of dead carcasses and was thankful that I was still alive.\"","Leslie - Outside A6C - Feb 28, 2018 6:41pm"]
];

var typer = new TypeIt('#sentence',{
  speed: 40,
  autoStart: false,
  html: true,
  lifeLike: true
});

var autoplay = true;
var prev;

var analyserCanvas;
var ctx;
var analyser;
var bufferLength;
var dataArray;

function preload() {

  for (var i = 0; i < 19; i++) {
    recs.push(new Howl({
      src: ['assets/recordings/'+(i+1)+'.mp3']
    }));
  }

  campusMap = loadImage('assets/map2.png');
  analyserCanvas = document.getElementById('analyser');
  ctx = analyserCanvas.getContext('2d');
  analyser = Howler.ctx.createAnalyser();
  Howler.masterGain.connect(analyser);
  analyser.connect(Howler.ctx.destination);
  analyser.fftSize = 2048;
  bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  ctx.clearRect(0, 0, 800, 98);
  active = 0;
}


function setup() {
  $(".header").show();
  $(".story-container").show();
  $(".contributor-container").show();
  $(".instructions-container").show();
  $(".img-container").show();
  $(".sentence-container").show();
  $(".analyser-container").show();

  canvas = createCanvas(800, 354);
  canvas.parent('canvas');
  background(0);
  noStroke();

  for(var i = 0; i<19; i++){
    pointsArr.push(new Point(locations[i][0], locations[i][1], recs[i]));
  }

  typer.type(sentences[0][0]);
  $("#source").html(sentences[0][1]);
  active = 0;
}

function draw() {
  noStroke();
  background(0);
  image(campusMap, 0, 0, width, height);

  for(var i = 0; i<pointsArr.length; i++){
    fill(255, 0, 90, 75);
    ellipse(pointsArr[i].xVal, pointsArr[i].yVal, 20);
    $('#con'+i).css({'color':'white', 'font-size': '13px'});
  }

  $('#con'+active).css({'color':'rgba(255, 0, 90, 0.8)', 'font-size':'30px'});

  sizeCount = parseInt(count/6);

  fill(255, 125, 0, 75);
  ellipse(pointsArr[active].xVal, pointsArr[active].yVal, sizeArr[sizeCount]);

  strokeWeight(3);
  stroke(255, 0, 90, 85);
  for (var i = 0; i<lines.length; i++) {
    line(lines[i][0].xVal, lines[i][0].yVal, lines[i][1].xVal, lines[i][1].yVal)
  }

  if(played === false){
    pan = -pan;
    pointsArr[active].sound.stereo(pan).play();
    played = true;
  }

  if(autoplay === true && pointsArr[active].sound.playing() === false && active < pointsArr.length-1){
    prev = pointsArr[active];
    active++;

    typer.empty().type(sentences[active]);
    $("#source").html(sentences[active][1]);

    lines.push([prev, pointsArr[active]]);

    played = false;
  }

  count++;
  if(count>30){
    count = 0;
  }
}

function mousePressed(){
  var d;
  var found = false;
  for(var i = 0; i<pointsArr.length; i++){
    d = int(dist(mouseX, mouseY, pointsArr[i].xVal, pointsArr[i].yVal));
    if(autoplay === false && d < 10){
      found = true;

      var prev = pointsArr[active];
      pointsArr[active].sound.stop();
      active = i;

      typer.empty().type(sentences[active][0]);
      $("#source").html(sentences[active][1]);

      lines.push([prev, pointsArr[active]]);

      played = false;
      break;
    }
  }
  if (autoplay === false && found === false) {
    if(active<pointsArr.length - 1){
      prev = pointsArr[active];
      pointsArr[active].sound.stop();
      active++;

      typer.empty().type(sentences[active]);
      $("#source").html(sentences[active][1]);

      lines.push([prev, pointsArr[active]]);

      played = false;
    }
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    lines = [];
    pointsArr[active].sound.stop();
    active = 0;

    typer.empty().type(sentences[active][0]);
    $("#source").html(sentences[active][1]);

    played = false;
  }

  if(keyCode === RIGHT_ARROW){
    if(autoplay === false && active<pointsArr.length - 1){
      prev = pointsArr[active];
      pointsArr[active].sound.stop();
      active++;

      typer.empty().type(sentences[active]);
      $("#source").html(sentences[active][1]);

      lines.push([prev, pointsArr[active]]);

      played = false;
    }
  }

  if(keyCode === LEFT_ARROW){
    if(autoplay === false && active>0){
      pointsArr[active].sound.stop();
      active--;

      typer.empty().type(sentences[active]);
      $("#source").html(sentences[active][1]);

      played = false;
    }
  }

  if(keyCode === DOWN_ARROW){
    if (autoplay === true) {
      autoplay = false;
      $(".autoplay-div").html("autoplay: off");
      $(".instructions-container").html('<p>press &nbsp; <i class="fas fa-arrow-up"></i> &nbsp; to start over<br>use &nbsp;<i class="fas fa-arrow-left"></i> &nbsp; and &nbsp; <i class="fas fa-arrow-right"></i> &nbsp;or &nbsp;<i class="far fa-hand-pointer"></i> &nbsp;anywhere to navigate the story<br>press &nbsp; <i class="fas fa-arrow-down"></i> &nbsp; to toggle autoplay<br><i class="far fa-hand-pointer"></i> &nbsp;on a point to go to that point in story</p>');
    } else{
      autoplay = true;
      $(".autoplay-div").html("autoplay: on");
      $(".instructions-container").html('<p>press &nbsp; <i class="fas fa-arrow-up"></i> &nbsp; to start over<br>press &nbsp; <i class="fas fa-arrow-down"></i> &nbsp; to toggle autoplay</p>')
    }
  }
}

function analyse() {
  drawVisual = requestAnimationFrame(analyse);
  analyser.getByteTimeDomainData(dataArray);
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, 800, 98);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgb(255, 0, 90)';
  ctx.beginPath();
  var sliceWidth = 800 * 1.0 / bufferLength;
  var x = 0;

  for(var i = 0; i < bufferLength; i++) {
    var v = dataArray[i] / 128.0;
    var y = v * 98/2;

    if(i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  ctx.stroke();
};

analyse();
