(function () {
  'use strict';

  var overlay = document.getElementById('form-modal');
  if (!overlay) return;

  var closeBtn = overlay.querySelector('.modal__close');

  function openModal() {
    overlay.classList.add('open');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  // click on trigger buttons
  document.addEventListener('click', function (e) {
    var target = e.target.closest('[data-modal-trigger]');
    if (target) {
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
