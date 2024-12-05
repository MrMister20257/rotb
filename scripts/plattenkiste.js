document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('.playlist-div');
    const audioContainer = document.getElementById('audioContainer');
    let audioElement = null;

    const createAndPlayAudio = (playlist) => {
        if (audioElement) {
            audioElement.pause();
            audioContainer.removeChild(audioElement);
            audioElement = null;
        }

        audioElement = document.createElement('audio');
        audioElement.autoplay = true;
        audioElement.controls = true;

        const playlistArray = playlist.split(',');

        const playRandomSong = () => {
            const randomIndex = Math.floor(Math.random() * playlistArray.length);
            audioElement.src = playlistArray[randomIndex];
            audioElement.play();
        };

        audioElement.addEventListener('ended', playRandomSong);

        playRandomSong();

        audioContainer.appendChild(audioElement);
    };

    divs.forEach(div => {
        div.addEventListener('click', () => {
            const playlist = div.getAttribute('data-playlist');
            if (playlist) {
                createAndPlayAudio(playlist);
            }
        });
    });
});