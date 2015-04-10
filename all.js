var button = document.getElementById("#button");
var video  = document.getElementById("#video");

function fadeIn() {
    video.classList.remove("video-off");
}
function fadeOut() {
    video.classList.add("video-off");
}

video.onclick = function() {
    if (video.paused) {
        video.play();
        fadeIn();
    } else {
        fadeOut();
        video.pause();
    }
};

video.pause();
