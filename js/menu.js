// ========================================
// Навигация (меню)
// ========================================

const menuBtn = document.querySelector('.menu__button');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.nav-overlay');
const navClose = document.querySelector('.nav-menu__close');
const navItems = document.querySelectorAll('.nav-menu__item');

const mql = window.matchMedia('(max-width: 767px)');

function isMobile() {
  return mql.matches;
}

function openDesktopMenu() {
  menuBtn.classList.add('hidden');
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('hidden');
    }, index * 50);
  });
}

function closeDesktopMenu() {
  navItems.forEach((item, index) => {
    menuBtn.classList.remove('hidden');
    navClose.classList.add('hidden');
    setTimeout(() => {
      item.classList.add('hidden');
    }, index * 50);
  });
}

function openMobileMenu() {
  navMenu.classList.add('open');
  menuBtn.classList.add('hidden')
  navOverlay.classList.add('open');
}

function closeMobileMenu() {
  navMenu.classList.remove('open');
  menuBtn.classList.remove('hidden')
  navOverlay.classList.remove('open');
}

function handleOpen(e) {
  e.stopPropagation();
  if (isMobile()) {
    openMobileMenu();
  } else {
    openDesktopMenu();
  }
}

function handleClose(e) {
  e.stopPropagation();
  if (isMobile()) {
    closeMobileMenu();
  } else {
    closeDesktopMenu();
  }
}

menuBtn.addEventListener('click', handleOpen);
navClose.addEventListener('click', handleClose);
navOverlay.addEventListener('click', closeMobileMenu);
