var button = document.getElementById("#button");
var video  = document.getElementById("#video");

function fadeIn() {
}
function fadeOut() {
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
