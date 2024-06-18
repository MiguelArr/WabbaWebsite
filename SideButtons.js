    // Get references to the buttons
    var aboutButton = document.getElementById('aboutButton');
    var creditsButton = document.getElementById('creditsButton');
    var audio = document.getElementById("audioPlayer");
    var playPauseButton = document.getElementById("playPauseButton");
    var playIcon = document.getElementById("playIcon");
    var buttonText = playPauseButton.querySelector(".button-text");
    var audio = document.getElementById("audioPlayer");
    audio.volume = 0.333;
    // Add event listeners to the buttons

    aboutButton.addEventListener('click', function() {
        window.location.href = '#about';
    });
    creditsButton.addEventListener('click', function() {
        window.location.href = '#credits';
    });
    playButton.addEventListener('click', function() {
        window.location.href = '#play';
    });
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    })
    followButton.addEventListener('click', function() {
        window.open("https://twitter.com/Wabbaboy", "_blank")
    })
    playPauseButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playIcon.src = "FlyKnight/Piranha.gif";
            buttonText.textContent = "Pause Music";
        } else {
            audio.pause();
            playIcon.src = "FlyKnight/Piranha_stop.gif";
            buttonText.textContent = "Play Music";
        }
    });
    futureButton.addEventListener('click', function() {
        window.location.href = '#future';
    });

    
