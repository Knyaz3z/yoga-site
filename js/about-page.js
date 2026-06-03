(function () {
  'use strict';

  // Hero fade-in
  const hero = document.querySelector('.about-hero');
  if (hero) {
    setTimeout(function () {
      hero.classList.add('about-hero--visible');
    }, 200);
  }

  // Story blocks scroll animation
  var storyBlocks = document.querySelectorAll('.story-block');
  if (storyBlocks.length) {
    var storyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('story-block--visible');
            storyObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    storyBlocks.forEach(function (el) {
      storyObserver.observe(el);
    });
  }

  // Invitation block scroll animation
  var invitation = document.querySelector('.about-invitation');
  if (invitation) {
    var invObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-invitation--visible');
            invObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    invObserver.observe(invitation);
  }

  // Service cards scroll animation
  var serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length) {
    var cardObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('service-card--visible');
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    serviceCards.forEach(function (el) {
      cardObserver.observe(el);
    });
  }

})();
