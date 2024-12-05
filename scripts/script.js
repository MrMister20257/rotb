//Header Controls
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('.audio');
    const video = document.querySelector('.video');
    const muteButton = document.querySelector('.mute_btn');
    const pauseButton = document.querySelector('.pause_btn');
    const icon = muteButton.querySelector('i');
    const icon2 = pauseButton.querySelector('i');

    pauseButton.addEventListener('click', () => {
        if (audio.paused && video.paused) {
            video.play();
            audio.play();
            icon2.className = 'fa-solid fa-pause';
        } else {
            video.pause();
            audio.pause();
            icon2.className = 'fa-solid fa-play';
        }
    });

    muteButton.addEventListener('click', () => {
        if (audio.muted) {
            audio.muted = false;
            video.muted = false;
            icon.className = 'fa-solid fa-volume-xmark';
        } else {
            audio.muted = true;
            video.muted = true;
            icon.className = 'fa-solid fa-volume-high';
        }
    });
});

//Mousemove
document.addEventListener('DOMContentLoaded', () => {
    const character = document.querySelector('.character');
        
    if (character) {
        character.addEventListener('mousemove', (event) => {
            const rect = character.getBoundingClientRect();
            const cursorX = event.clientX - rect.left;
            const centerX = rect.width / 2;

            if (cursorX < centerX) {
                character.style.transform = 'scaleX(-1)';
            } else {
                character.style.transform = 'scaleX(1)';
            }
        });
    } 
});

//IntelLink
document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('intelLink');
    const targetPage = '/index.html';

    link.addEventListener('click', (event) => {
        event.preventDefault();

        if (localStorage.getItem('targetPageOpen') === 'true') {
            window.close();
        } else {
            localStorage.setItem('targetPageOpen', 'true');
            window.location.href = targetPage;
        }
    });
});

window.addEventListener('load', () => {
    let currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || 'hitlist.html') {
        localStorage.setItem('targetPageOpen', 'true');
    }
});

window.addEventListener('beforeunload', () => {
    let currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || 'hitlist.html') {
        localStorage.removeItem('targetPageOpen');
    }
});