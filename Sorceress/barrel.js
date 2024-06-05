function stopMarquee() {
    const marquee = document.getElementById('barrel');
    const image = document.getElementById('barrelimage');

    marquee.setAttribute("scrollamount", "0");

    // Change the image
    image.src = 'BarrelBreak.gif';
    image.onclick = null;
    image.id = 'marqueeImageStopped';
}