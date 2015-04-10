var video = document.getElementById("video");
var title = document.getElementById("title");
video.pause();

function fadeIn() {
    video.classList.remove("video-off");
};
function fadeOut() {
    video.classList.add("video-off");
};

video.onclick = function() {
    video.play();
    fadeIn();
};

title.onclick = function() {
    video.play();
    fadeIn();
    this.style.display = "none";
};

/* TODO: wait for some buffering to happen first -- show loading stuff
setInterval(function() {
    var p = video.buffered.end(0) / video.duration;
    console.log(p);
}, 300);
*/
