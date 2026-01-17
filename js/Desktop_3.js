document.querySelectorAll("[data-slider]").forEach((s) => {
  const imgs = [...s.querySelectorAll("img")];
  const prev = s.querySelector(".prev");
  const next = s.querySelector(".next");
  const dotsWrap = s.querySelector(".dots");

  let i = 0;

  //tạo dots
  const dots = imgs.map((_, idx) => {
    const b = document.createElement("button");
    b.type = "button";
    b.addEventListener("click", () => go(idx));
    dotsWrap.appendChild(b);
    return b;
  });

  function render(){
    imgs.forEach((img, idx) => img.classList.toggle("active", idx === i));
    dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
  }

  function go(idx){
    i = (idx + imgs.length) % imgs.length;
    render();
  }

  prev?.addEventListener("click", () => go(i - 1));
  next?.addEventListener("click", () => go(i + 1));

  go(0);

  // auto chạy nếu muốn:
  // setInterval(() => go(i + 1), 5000);
});
