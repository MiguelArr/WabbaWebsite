document.querySelectorAll('.PhotoGallery img').forEach(img => {
  img.loading = 'lazy';
});

// --- ADD THIS: shuffle each gallery section's images ---
function shuffleGallery(section) {
  const imgs = Array.from(section.querySelectorAll('img'));
  for (let i = imgs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imgs[i], imgs[j]] = [imgs[j], imgs[i]];
  }
  imgs.forEach(img => section.appendChild(img)); // reinsert in new order
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
  const imgsInSection = Array.from(section.querySelectorAll('img'));
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

// Tab buttons: show only the matching gallery section
const tabButtons = document.querySelectorAll('.tab-btn');
const gallerySections = document.querySelectorAll('.PhotoGallery');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    const section = document.querySelector(`.PhotoGallery[data-section="${target}"]`);
    const isCurrentlyVisible = section.style.display === 'block';

    gallerySections.forEach(s => {
      s.style.display = 'none';
    });
    tabButtons.forEach(b => b.classList.remove('active'));

    if (!isCurrentlyVisible) {
      section.style.display = 'block';
      btn.classList.add('active');
    }
  });
});