let currentIndex = 0;

const playlist = ['/videos/pmd.mp4', '/videos/koolgrap.mp4', '/videos/dasefxreal.mp4', '/videos/lady.mp4', '/videos/redman.mp4', '/videos/smooth.mp4'];
document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');

    videoPlayer.src = playlist[currentIndex];
    videoPlayer.play();

    videoPlayer.addEventListener('ended', () => {

        currentIndex = (currentIndex + 1) % playlist.length;
        videoPlayer.src = playlist[currentIndex];
        videoPlayer.play();
    });
});

function rewind() {

    const videoPlayer = document.getElementById('videoPlayer');

    if (currentIndex != 0) {
        currentIndex = (currentIndex - 1) % playlist.length;
        videoPlayer.src = playlist[currentIndex];
        videoPlayer.play();
    }
    else {
        videoPlayer.src = playlist[5];
        videoPlayer.play();
    }
}

function forward() {

    const videoPlayer = document.getElementById('videoPlayer');

    if (currentIndex == 5) {
        videoPlayer.src = playlist[0];
        videoPlayer.play();
    }
    else {
        currentIndex = (currentIndex + 1) % playlist.length;
        videoPlayer.src = playlist[currentIndex];
        videoPlayer.play();
    }
}
