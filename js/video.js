window.addEventListener("DOMContentLoaded", function() {
    var videoPlayer = document.querySelector('.discover-vid');
    console.log(videoPlayer);
    var video = document.querySelector('.control-video');
    videoPlayer.addEventListener('click', function(e) {
        video.style.zIndex = '10';
        video.play();
        
    })
}, false);