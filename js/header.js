document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('#site-header[data-include]');
  if (!header) return;

  fetch(header.getAttribute("data-include"))
    .then(r => r.text())
    .then(html => {
      header.innerHTML = html;
      const menuNav = header.querySelector('.menu-nav').querySelectorAll('a');

      switch (window.location.pathname) {
        case '/html/Desktop_1.html': menuNav[0].style.color = 'var(--main-text-click)'; break;
        case "/html/product.html": menuNav[1].style.color = 'var(--main-text-click)'; break;
        case '/html/Desktop_3.html': menuNav[2].style.color = 'var(--main-text-click)'; break;
        case '/html/Desktop_4.html': menuNav[3].style.color = 'var(--main-text-click)'; break;
        case '/html/Desktop_5.html': menuNav[4].style.color = 'var(--main-text-click)'; break;
        default: break;
      }
    


    })
    .catch(console.error);



});
