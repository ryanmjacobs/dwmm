var video = document.getElementById("video");
var title = document.getElementById("title");

function fadeIn() {
    video.classList.remove("video-fade");
    this.style.display = "none";
};
function fadeOut() {
    video.classList.add("video-fade");
    this.style.display = "block";
};

title.onclick = function() {
    video.play();
    fadeIn();
};

video.onended = function() {
    fadeOut();
    video.pause();
    video.currentTime = 0;
}

/* TODO: wait for some buffering to happen first -- show loading stuff
setInterval(function() {
    var p = video.buffered.end(0) / video.duration;
    console.log(p);
}, 300);
*/
