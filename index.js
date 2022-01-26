//Detect Button Press
for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", onButtonPress);
}
function onButtonPress() {
  var drum = this.innerHTML;
  playDrum(drum);
  addAnimation(drum);
}
/*
//Another way
for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var drum = this.innerHTML;
    playDrum(drum);
    addAnimation(drum);
  });
}
*/

//Detect Key Press
document.addEventListener("keydown", function() {
  onKeyPress(event.key);
});
function onKeyPress(key) {
  playDrum(key);
  addAnimation(key);
}
/*
//Another way
document.addEventListener("keydown", function() {
  playDrum(event.key);
  addAnimation(event.key);
});
*/

function playDrum(key) {
  var audio = null;
  switch (key) {
    case "w": audio = new Audio("sounds/tom-1.mp3");
              audio.play();
              break;
    case "a": audio = new Audio("sounds/tom-2.mp3");
              audio.play();
              break;
    case "s": audio = new Audio("sounds/tom-3.mp3");
              audio.play();
              break;
    case "d": audio = new Audio("sounds/tom-4.mp3");
              audio.play();
              break;
    case "j": audio = new Audio("sounds/snare.mp3");
              audio.play();
              break;
    case "k": audio = new Audio("sounds/crash.mp3");
              audio.play();
              break;
    case "l": audio = new Audio("sounds/kick-bass.mp3");
              audio.play();
              break;
    default:  console.log(key);
  }
}

function addAnimation(key) {
  if(key === "w" || key === "a" || key === "s" || key === "d"  || key === "j"  || key === "k" || key === "l") {
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(function(){ button.classList.remove("pressed"); }, 100);
  }
}
