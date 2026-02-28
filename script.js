(function () {
  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Optional: set "last updated" (edit this date when you change the site)
  var updatedEl = document.getElementById('updated');
  if (updatedEl) updatedEl.textContent = 'Feb 2025';

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
