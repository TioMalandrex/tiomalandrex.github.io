/* ---- Typewriter ---- */
function typeWriter(elementID, text) {
  let i = 0;
  const el = document.getElementById(elementID);
  if (!el) return;
  function write() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(write, 45);
    }
  }
  write();
}

/* ---- Mobile menu: close on link click ---- */
document.querySelectorAll("ul#menu-content li a").forEach((item) => {
  item.addEventListener("click", () => {
    const cb = document.querySelector('#menuToggle input[type="checkbox"]');
    if (cb) cb.checked = false;
  });
});

/* ---- Sticky header shadow ---- */
const desktopHeader = document.getElementById("desktop");
if (desktopHeader) {
  window.addEventListener("scroll", () => {
    desktopHeader.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });
}

/* ---- Scroll reveal (IntersectionObserver) ---- */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    // Trigger when at least 12% of the element is visible and 40px past viewport edge
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
    observer.observe(el);
  });
}

/* ---- Init ---- */
document.addEventListener("DOMContentLoaded", () => {
  typeWriter("type-name", "INFRAESTRUTURA • AUTOMAÇÃO • OBSERVABILIDADE");
  initReveal();
});
