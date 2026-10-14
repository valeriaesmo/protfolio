document.documentElement.classList.remove('no-js');
(function () {
  /* Project cards */
  var projects = document.querySelectorAll('.proj');
  function setOpen(p, open) {
    p.classList.toggle('open', open);
    var btn = p.querySelector('.proj-toggle');
    var inner = p.querySelector('.proj-inner');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.querySelector('.lbl').textContent = open ? 'Less on the project' : 'More on the project';
    if (open) { inner.removeAttribute('inert'); } else { inner.setAttribute('inert', ''); }
  }
  projects.forEach(function (p) {
    var btn = p.querySelector('.proj-toggle');
    btn.addEventListener('click', function () {
      setOpen(p, btn.getAttribute('aria-expanded') !== 'true');
    });
    setOpen(p, p.classList.contains('open'));
  });
  try {
    if (location.hash) {
      var target = document.querySelector(location.hash);
      if (target && target.classList.contains('proj')) { setOpen(target, true); }
    }
  } catch (e) {}

  /* Menu that turns into a three line button on small screens */
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.getElementById('mobile-nav');
  function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) { menu.removeAttribute('hidden'); } else { menu.setAttribute('hidden', ''); }
  }
  menuBtn.addEventListener('click', function () {
    setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { setMenu(false); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setMenu(false); }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 820) { setMenu(false); }
  });
})();

(function () {
  var user = ['valeria', 'esmo'].join('.');
  var host = ['outlook', 'com'].join('.');
  var links = document.querySelectorAll('a[data-email]');
  for (var i = 0; i < links.length; i++) { links[i].setAttribute('href', 'mailto:' + user + '@' + host); }
})();
