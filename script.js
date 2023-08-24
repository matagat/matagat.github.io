console.log("WebScript Loaded Correctly");

// Verifying path
var loc = window.location.pathname;
var dir = loc.substring(loc.lastIndexOf('/'));
// If path is mobile index do nothing, else detect screen size
// Redirect to mobile if screen size is 700 or less
if("/indexMobile.html" == dir){
console.log("Mobile Index Detected")}
else if (screen.width <= 700) {
  console.log("Screen width is 700 or less Switching to Mobile index");
  document.location = "indexMobile.html";
}

// Click on Dubplate to play Audio Script
x = document.getElementById("startOrStopImg").onclick = function() {
  var audio = document.getElementById("audio");
  if (audio.paused) audio.play();
  else audio.pause();console.log("Dubplate Loaded."); 
};
