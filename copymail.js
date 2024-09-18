function copyEmailAndChangeImage() {
    // Email to copy
    const email = "wabbaboydev@gmail.com";
    
    // Copy email to clipboard
    navigator.clipboard.writeText(email).then(() => {
        console.log('Email copied to clipboard: ' + email);
    }).catch(err => {
        console.error('Error copying email: ', err);
    });

    // Get the image element
    const img = document.getElementById('email-img');

    // Change image source
    const originalSrc = img.src;
    const newSrc = 'Personal/Copy_logo.png';  // Path to the new image

    img.src = newSrc;

    // Revert back to original image after 3 seconds
    setTimeout(() => {
        img.src = originalSrc;
    }, 2000); // 3000ms = 3 seconds
}