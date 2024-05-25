// Wrap each letter of the text in a span element
const textElements = document.querySelectorAll('.bouncing-text'); // Change to select elements by class
textElements.forEach(textElement => {
    textElement.innerHTML = textElement.textContent.replace(/\S/g, "<span class='KSletter'>$&</span>");
});

// Apply animation to each span
const letters = document.querySelectorAll('.KSletter');
letters.forEach((letter, index) => {
    letter.style.animationDelay = `${index % 10 * 150}ms`;
});