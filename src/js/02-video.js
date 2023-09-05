import Player from "@vimeo/player";

const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);

player.on("timeupdate", function () {
  console.log("played the video!");
});
