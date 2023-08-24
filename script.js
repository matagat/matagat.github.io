console.log("Script Loaded Correctly");

// Click on Dubplate to play Audio Script
x = document.getElementById("startOrStopImg").onclick = function() {
  var audio = document.getElementById("audio");
  if (audio.paused) audio.play();
  else audio.pause();
};