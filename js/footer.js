document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector('#site-footer[data-include]');
  if (!footer) return;

  fetch(footer.getAttribute("data-include"))
    .then(r => r.text())
    .then(html => (footer.innerHTML = html))
    .catch(console.error);
});
