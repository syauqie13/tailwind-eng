const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    hamburgerBtn.classList.toggle("open"); // toggle hamburger -> close
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  // klik tombol hamburger/close
  hamburgerBtn.addEventListener("click", toggleMenu);

  // klik link di dalam menu -> close
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", toggleMenu);
  });
};

document.addEventListener("DOMContentLoaded", initApp);
