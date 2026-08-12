document.querySelectorAll('.PhotoGallery img').forEach(img => {
  img.loading = 'lazy';
});

// --- ADD THIS: wrap each photo in a container, add a spinning badge for "liked" photos ---
// Mark a photo as liked in the HTML with: <img class="liked" src="...">
// The badge lives in the gallery only -- the lightbox uses its own separate <img>,
// so the badge never appears there.
document.querySelectorAll('.PhotoGallery img').forEach(img => {
  const wrapper = document.createElement('div');
  wrapper.className = 'photo-item';
  img.parentNode.insertBefore(wrapper, img);
  wrapper.appendChild(img);

  if (img.classList.contains('liked')) {
    const badge = document.createElement('img');
    badge.src = '/Photography/CrownSpin.gif'; // <-- update to your actual spinner gif path
    badge.className = 'liked-badge';
    badge.alt = '';
    wrapper.appendChild(badge);
  }
});
// --- END ADD ---

// --- ADD THIS: shuffle each gallery section's images ---
function shuffleGallery(section) {
const items = Array.from(section.querySelectorAll('.photo-item'));
for (let i = items.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
items.forEach(item => section.appendChild(item)); // reinsert in new order
}

document.querySelectorAll('.PhotoGallery').forEach(section => {
shuffleGallery(section);
}); 
// --- END ADD ---

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const prevBtn = document.getElementById('lightbox-prev');
const nextBtn = document.getElementById('lightbox-next');

let currentGalleryImages = [];
let currentIndex = 0;

function openLightbox(imgList, index) {
currentGalleryImages = imgList;
currentIndex = index;
lightboxImg.src = currentGalleryImages[currentIndex].src;
lightboxImg.alt = currentGalleryImages[currentIndex].alt;
lightbox.classList.add('active');
}

function showNext() {
currentIndex = (currentIndex + 1) % currentGalleryImages.length;
lightboxImg.src = currentGalleryImages[currentIndex].src;
lightboxImg.alt = currentGalleryImages[currentIndex].alt;
}

function showPrev() {
currentIndex = (currentIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
lightboxImg.src = currentGalleryImages[currentIndex].src;
lightboxImg.alt = currentGalleryImages[currentIndex].alt;
}

const closeBtn = document.querySelector('.lightbox .close');

closeBtn.addEventListener('click', (e) => {
e.stopPropagation();
lightbox.classList.remove('active');
});

// Attach click listeners per-section, so arrows only cycle within that section
// (this now reads the SHUFFLED order, since the shuffle already ran above)
document.querySelectorAll('.PhotoGallery').forEach(section => {
const imgsInSection = Array.from(section.querySelectorAll('img:not(.liked-badge)'));
imgsInSection.forEach((img, index) => {
img.addEventListener('click', () => openLightbox(imgsInSection, index));
  });
});

nextBtn.addEventListener('click', (e) => {
e.stopPropagation();
showNext();
});

prevBtn.addEventListener('click', (e) => {
e.stopPropagation();
showPrev();
});

lightbox.addEventListener('click', (e) => {
if (e.target === lightbox) {
lightbox.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
if (!lightbox.classList.contains('active')) return;
if (e.key === 'Escape') lightbox.classList.remove('active');
if (e.key === 'ArrowRight') showNext();
if (e.key === 'ArrowLeft') showPrev();
});

// --- UPDATED: Tab buttons now control galleries AND the gear expand-box ---
// The gear button (data-target="gear") shows #expand-box instead of a .PhotoGallery section.
// All 5 buttons are single-select: clicking the active one again closes it.
const tabButtons = document.querySelectorAll('.tab-btn');
const gallerySections = document.querySelectorAll('.PhotoGallery');
const expandBox = document.getElementById('expand-box');

function getPanel(target) {
  return target === 'gear'
    ? expandBox
    : document.querySelector(`.PhotoGallery[data-section="${target}"]`);
}

tabButtons.forEach(btn => {
btn.addEventListener('click', () => {
const target = btn.dataset.target;
const panel = getPanel(target);
const isCurrentlyVisible = panel.style.display === 'block';

gallerySections.forEach(s => {
s.style.display = 'none';
    });
expandBox.style.display = 'none';
tabButtons.forEach(b => b.classList.remove('active'));

if (!isCurrentlyVisible) {
panel.style.display = 'block';
btn.classList.add('active');
    }
  });
});
// --- END UPDATED ---
