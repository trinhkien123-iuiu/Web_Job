document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('#site-header[data-include]');
  if (!header) return;

  fetch(header.getAttribute("data-include"))
    .then(r => r.text())
    .then(html => (header.innerHTML = html))
    .catch(console.error);
});

