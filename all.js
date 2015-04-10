var video = document.getElementById("#video");
video.pause();

function fadeIn() {
    video.classList.remove("video-off");
};
function fadeOut() {
    video.classList.add("video-off");
};

var setClickHook = function() {
    video.onclick = function() {
        if (video.paused) {
            video.play();
            fadeIn();
        } else {
            fadeOut();
            video.pause();
        }
    };
};

/* TODO: wait for some buffering to happen first -- show loading stuff
setInterval(function() {
    var p = video.buffered.end(0) / video.duration;
    console.log(p);
}, 300);
*/

setTimeout(setClickHook, 1000);
