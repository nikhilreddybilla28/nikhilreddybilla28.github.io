(function () {
  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Last updated date in welcome section (edit in HTML or here when you change the site)
  var lastUpdatedEl = document.getElementById('last-updated');
  if (lastUpdatedEl) lastUpdatedEl.textContent = '02/28/2026';

  // Highlight current section in nav on scroll
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    var scrollY = window.scrollY || window.pageYOffset;
    var headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
    var current = '';

    sections.forEach(function (section) {
      var top = section.offsetTop - headerHeight - 20;
      var height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.slice(1) === current) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('scroll', function () {
    requestAnimationFrame(updateActiveNav);
  });
  updateActiveNav();
})();
