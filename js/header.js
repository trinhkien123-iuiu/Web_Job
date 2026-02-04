var keyword = ''; 

//Phan nay cho loader
function hideLoader() {
    const loader = document.getElementById('loader');
   if (loader && loader.style.top !== '-2000px')
     loader.style.top = '-2000px';
     document.body.style.overflow = 'auto';
   
}
window.addEventListener('load', hideLoader);

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('#site-header[data-include]');
  if (!header) return;
  fetch(header.getAttribute("data-include"))
    .then(r => r.text())
    .then(html => {
    
      header.innerHTML = html;
      const menuNav = header.querySelector('.menu-nav').querySelectorAll('a');
    
      switch (window.location.pathname) {
        case '/html/index.html': menuNav[0].style.color = 'var(--main-text-click)'; break;
        case "/html/product.html": menuNav[1].style.color = 'var(--main-text-click)'; break;
        case '/html/Desktop_3.html': menuNav[2].style.color = 'var(--main-text-click)'; break;
        case '/html/Desktop_4.html': menuNav[3].style.color = 'var(--main-text-click)'; break;
        case '/html/Desktop_5.html': menuNav[4].style.color = 'var(--main-text-click)'; break;
        default: break;
      }
     
      keyword = document.getElementById('search-input');
      var isTyping = false;
      keyword.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission if any
            const keywordValue = this.value.trim();
            if (keywordValue.length > 0) {
              isTyping = true;
              window.location.href = `/html/product.html?search=${encodeURIComponent(keywordValue)}`;
            }
        }
      
      });
   setTimeout(hideLoader, 2000);
  }
    ).catch(err => {
      console.error(err);
      hideLoader();
    });
});
