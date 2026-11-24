/* Theme toggle + active-section highlighting. */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var dark = root.dataset.theme
        ? root.dataset.theme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = dark ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("xl-theme", next); } catch (e) {}
    });
  }

  var sections = document.querySelectorAll("main section[id]");
  if (!sections.length || !("IntersectionObserver" in window)) return;
  var links = document.querySelectorAll('.toc a[href^="#"], .topnav a[href^="#"]');
  function setActive(id) {
    links.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
    });
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: "-35% 0px -60% 0px" });
  sections.forEach(function (s) { io.observe(s); });
})();
