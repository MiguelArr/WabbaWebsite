function trail(e) {
    var div = document.createElement('div');
    div.classList.add('happyTrail');
  
    // Generate random offsets
    var offsetX = Math.random() * 30 - 100; // Random number between -10 and 10
    var offsetY = Math.random() * 30 - 70; // Random number between -10 and 10

    Object.assign(div.style, {
        top: (e.pageY + offsetY) + 'px',
        left: (e.pageX + offsetX) + 'px'
    });
  
    document.body.appendChild(div);
    setTimeout(function() {
        document.body.removeChild(div);
    }, 800);
}

addEventListener('mousemove', trail);