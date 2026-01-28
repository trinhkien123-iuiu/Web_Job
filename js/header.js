 var keyword = '';
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('#site-header[data-include]');
  if (!header) return;
  fetch(header.getAttribute("data-include"))
    .then(r => r.text())
    .then(html => {
      header.innerHTML = html;
      const menuNav = header.querySelector('.menu-nav').querySelectorAll('a');
      const headerEl = header.querySelector('.header');
      const hamburgerBtn = header.querySelector('.hamburger-btn');
      const overlay = header.querySelector('.mobile-overlay');
      const drawer = header.querySelector('.mobile-drawer');
      const drawerClose = header.querySelector('.drawer-close');

      switch (window.location.pathname) {
        case '/html/Desktop_1.html': menuNav[0].style.color = 'var(--main-text-click)'; break;
        case "/html/product.html": menuNav[1].style.color = 'var(--main-text-click)'; break;
        case '/html/Desktop_3.html': menuNav[2].style.color = 'var(--main-text-click)'; break;
        case '/html/Desktop_4.html': menuNav[3].style.color = 'var(--main-text-click)'; break;
        case '/html/Desktop_5.html': menuNav[4].style.color = 'var(--main-text-click)'; break;
        default: break;
      }
    
      function closeDrawer() {
        if (!headerEl) return;
        headerEl.classList.remove('is-open');
        if (overlay) overlay.hidden = true;
        if (drawer) drawer.setAttribute('aria-hidden', 'true');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-label', 'Mở menu');
      }

      function openDrawer() {
        if (!headerEl) return;
        headerEl.classList.add('is-open');
        if (overlay) overlay.hidden = false;
        if (drawer) drawer.setAttribute('aria-hidden', 'false');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-label', 'Đóng menu');
      }

      function toggleDrawer() {
        if (!headerEl) return;
        if (headerEl.classList.contains('is-open')) closeDrawer();
        else openDrawer();
      }

      // init
      if (overlay) overlay.hidden = true;
      if (drawer) drawer.setAttribute('aria-hidden', 'true');
      if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');

      // listeners
      if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleDrawer);
      if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
      if (overlay) overlay.addEventListener('click', closeDrawer);

      // đóng khi bấm vào link trong menu
      menuNav.forEach(a => a.addEventListener('click', closeDrawer));

      // ESC đóng
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
      });

      keyword = document.getElementById('search-input');

    })
    .catch(console.error);



});
