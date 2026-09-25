// Progressive enhancements only; the page is fully usable without JavaScript.
(function () {
  "use strict";

  var root = document.documentElement;

  // ---- theme toggle -------------------------------------------------------
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set === "light" || set === "dark") return set;
    return media && media.matches ? "dark" : "light";
  }

  function label(btn) {
    var next = currentTheme() === "dark" ? "light" : "dark";
    btn.setAttribute("aria-label", "Switch to " + next + " theme");
    btn.setAttribute("title", "Switch to " + next + " theme");
  }

  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    label(toggle);
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* storage unavailable: the choice lasts for this page view only */
      }
      label(toggle);
    });
    if (media && media.addEventListener) {
      media.addEventListener("change", function () {
        label(toggle);
      });
    }
  }

  // ---- copy buttons for BibTeX -------------------------------------------
  if (navigator.clipboard && window.isSecureContext) {
    document.querySelectorAll(".bib-body").forEach(function (box) {
      var pre = box.querySelector("pre");
      if (!pre) return;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "copy-btn";
      btn.textContent = "Copy";
      btn.addEventListener("click", function () {
        navigator.clipboard.writeText(pre.textContent.trim()).then(
          function () {
            btn.textContent = "Copied";
            setTimeout(function () {
              btn.textContent = "Copy";
            }, 1600);
          },
          function () {
            btn.textContent = "Press Ctrl+C";
          }
        );
      });
      box.appendChild(btn);
    });
  }

  // ---- highlight the nav link for the section in view ----------------------
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  if ("IntersectionObserver" in window && links.length) {
    var byId = {};
    links.forEach(function (a) {
      byId[a.getAttribute("href").slice(1)] = a;
    });
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            a.removeAttribute("aria-current");
          });
          var link = byId[entry.target.id];
          if (link) link.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
})();
