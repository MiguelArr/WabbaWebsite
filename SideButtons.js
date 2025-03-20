// Get references to the buttons
var aboutButton = document.getElementById('aboutButton');
var creditsButton = document.getElementById('creditsButton');
var playPauseButton = document.getElementById('playPauseButton');
var playIcon = document.getElementById('playIcon');
var buttonText = playPauseButton.querySelector(".button-text");
var audio = document.getElementById("audioPlayer");

audio.volume = 0.333;

// Check if audio element exists
if (!audio) {
    console.error("Audio element not found!");
}

// Add event listeners to the buttons
if (aboutButton) {
    aboutButton.addEventListener('click', function() {
        window.location.href = '#about';
    });
}

if (creditsButton) {
    creditsButton.addEventListener('click', function() {
        window.location.href = '#credits';
    });
}

if (playPauseButton) {
    playPauseButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play().catch(error => console.error("Playback failed: ", error));
            playIcon.src = "FlyKnight/Piranha.gif";
            buttonText.textContent = "Pause Music";
        } else {
            audio.pause();
            playIcon.src = "FlyKnight/Piranha_stop.gif";
            buttonText.textContent = "Play Music";
        }
    });
} else {
    console.error("PlayPauseButton not found!");
}
