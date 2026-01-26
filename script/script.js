const footerHTML = `<div class="f-tittle">
        <p>Surah Baqarah Last 2 Ayat</p>
      </div>
      <div class="f-content">
        <div class="f-grid">
          <div class="f-description">
            <p>Discover the profound significance of the last two verses of Surah Al-Baqarah, known for their spiritual
              protection, blessings, and guidance. Explore their meanings, benefits, and translations on our website.
            </p>
          </div>
          <div class="f-links">
            <ul>
              <li><a href="/benefits-in-urdu/">Benefits In Urdu</li></a>
              <li><a href="/in-daily-life/">In Daily Life</li></a>
              <li><a href="/with-urdu-translation/">With Urdu Translation</li></a>
              <li><a href="/about">About</li></a>
              <li><a href="/privacy-policy">Privacy Policy</li></a>
              <li><a href="/blog">Blog</li></a>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>Surah Baqarah Last 2 Ayat &copy; 2026</p>
        </div>
      </div>
    </div>`;

document.querySelector(".footer").innerHTML = footerHTML;

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // change button symbol
  if (navLinks.classList.contains("active")) {
    navToggle.textContent = "✖"; // cross
  } else {
    navToggle.textContent = "☰"; // hamburger
  }
});
