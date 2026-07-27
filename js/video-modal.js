(function () {
  'use strict';

  var overlay = document.getElementById('video-modal');
  if (!overlay) return;

  var closeBtn = overlay.querySelector('.video-modal__close');
  var video = overlay.querySelector('.video-modal__player');

  function openModal() {
    overlay.classList.add('open');
    document.body.classList.add('modal-open');
    if (video) {
      video.currentTime = 0;
      video.play().catch(function () {});
    }
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.classList.remove('modal-open');
    if (video) {
      video.pause();
    }
  }

  // click on hero video buttons
  document.addEventListener('click', function (e) {
    if (e.target.closest('.hero__video-but') || e.target.closest('.hero__video-btn-mobile')) {
      e.preventDefault();
      openModal();
    }
  });

  // close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // click on overlay (outside modal)
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  // Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      closeModal();
    }
  });

})();
