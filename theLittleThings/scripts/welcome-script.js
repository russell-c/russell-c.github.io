var origDimensions = [660, 789, 1325]; //original dimensions of each gif
var scaleFactor = 0.175; //determines the scaling of each panel

$(".wave-anim").css("width", (origDimensions[0]*scaleFactor)+"px"); //calculate width of wave animation div as a percentage of the gif size
$(".wave-anim").css("height", (origDimensions[2]*scaleFactor)+"px"); //calculate height of wave animation div as a percentage of the gif size
$(".angry-anim").css("width", (origDimensions[1]*scaleFactor)+"px"); //calculate width of angry animation div as a percentage of the gif size
$(".angry-anim").css("height", (origDimensions[2]*scaleFactor)+"px"); //calculate height of angry animation div as a percentage of the gif size

$(".wave-anim").animate({left: '20px'}, 1000); //slide wave animation in from the left
$(".angry-anim").animate({right: '20px'}, 1000); //slide angry animation in from the right
$(".sub-title").fadeIn(2000);
