// ========================================
// Gallery lightbox
// ========================================

const galleryImages = document.querySelectorAll('.gallery__img');

if (galleryImages.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML =
    '<button class="lightbox__close">&times;</button>' +
    '<img class="lightbox__img" src="" alt="">';
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('.lightbox__img');
  const closeBtn = lightbox.querySelector('.lightbox__close');

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  galleryImages.forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.src));
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}
