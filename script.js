var video = document.getElementById("video");
var title = document.getElementById("title");

title.onclick = function() {
    // Fade out the text.
    //   There is not delay between adding the class
    //   and display=none because don't want to fade
    title.classList.add("video-fade");
    title.style.display = "none";

    // Fade in the video and start playing.
    video.play();
    video.classList.remove("video-fade");

};

video.onended = function() {
    // Fade out the video.
    video.pause();
    video.classList.add("video-fade");

    // Fade in the title text and move the video back to the start.
    setTimeout(function() {
        video.currentTime = 0;

        title.style.display = "block";
        setTimeout(function() {
            title.classList.remove("video-fade");
        }, 100);
    }, 500); // I know... magic numbers are bad.
}

/* TODO: wait for some buffering to happen first -- show loading stuff
setInterval(function() {
    var p = video.buffered.end(0) / video.duration;
    console.log(p);
}, 300);
*/
