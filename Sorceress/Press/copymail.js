function copyText(text) {
    const copyTextElement = document.getElementById('copyText');
    const originalText = copyTextElement.textContent;

    // Copy the text to the clipboard
    navigator.clipboard.writeText(text).then(() => {
        // Change the text to "Copied"
        copyTextElement.textContent = 'Copied 😎👍';

        // Add the fade animation class
        copyTextElement.classList.remove('unfade');
        copyTextElement.classList.add('fade');

        // Remove the fade animation class and revert text after animation ends
        setTimeout(() => {
            copyTextElement.classList.remove('fade');
            copyTextElement.textContent = originalText;
            copyTextElement.classList.add('unfade');
        }, 1000); // This should match the duration of the animation
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}