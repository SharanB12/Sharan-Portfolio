// Already perfect in your script.js
new Typed(".typed-text", {
  strings: ["Data Scientist", "AI Explorer", "Web Developer", "NCC Leader", "Chess Enthusiast"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";

    sections.forEach((section) => {
      const offsetTop = section.offsetTop - 120;
      const offsetBottom = offsetTop + section.offsetHeight;
      if (pageYOffset >= offsetTop && pageYOffset < offsetBottom) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSectionId)) {
        link.classList.add("active");
      }
    });
  });
});
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
