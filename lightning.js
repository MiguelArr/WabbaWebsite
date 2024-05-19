document.getElementById('actionButton').addEventListener('click', function() {
    var button = this;
    var buttonImage = document.getElementById('buttonImage');
    var originalSrc = buttonImage.src;
    var gifSrc = "Personal/TowerBodyTop_Lighted.gif";
    var buttonAudio = document.getElementById('buttonAudio');
    var gifDuration = 1200; // Duration in milliseconds, adjust as needed

    // Disable the button
    button.disabled = true;

    // Change the image to the GIF
    buttonImage.src = gifSrc;

    // Play the sound
    buttonAudio.play();

    // Set a timeout to revert back to the original image and re-enable the button after the GIF duration
    setTimeout(function() {
        buttonImage.src = originalSrc;
        button.disabled = false;
    }, gifDuration);
});
