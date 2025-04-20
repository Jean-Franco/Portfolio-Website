// Smooth Scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Animation for Sections and Contact Items
window.addEventListener('scroll', revealSections);

function revealSections() {
  const sections = document.querySelectorAll('.section');
  const contactItems = document.querySelectorAll('.contact-item');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 100) {
      section.classList.add('show');
    }
  });

  contactItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < windowHeight - 100) {
      item.classList.add('show');
    }
  });
}

// Initial call to reveal content on page load
revealSections();
  