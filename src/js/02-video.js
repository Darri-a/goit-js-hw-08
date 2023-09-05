import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);

player.on(
  "timeupdate",
  throttle((data) => {
    console.log(data);
    localStorage.setItem("videoplayer-current-time", data.seconds);
  }, 1000)
);

const currentTime = localStorage.getItem("videoplayer-current-time") ?? 0;

player.setCurrentTime(currentTime);
