// Basic interactivity: nav toggle, smooth scroll, modal preview, contact form validation, reveal on scroll

document.addEventListener('DOMContentLoaded', () => {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // NAV TOGGLE (mobile)
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // SMOOTH SCROLL for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // close mobile menu
        navMenu.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // LIKE / FAVORITE BUTTONS
document.querySelectorAll('.like-btn').forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('liked')) {
      button.classList.remove('liked');
      button.textContent = '🤍 Like';
    } else {
      button.classList.add('liked');
      button.textContent = '❤ Liked';
    }
  });
});

  // CONTACT FORM (client-side)
  // Contact form submission is now handled by Formspree via HTML POST.

  // REVEAL ON SCROLL (simple)
  const revealItems = document.querySelectorAll('.skill-card, .project-card, .stat, .about-text, .profile-card, .contact-form, .info-card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(10px)';
    item.style.transition = 'opacity .6s ease, transform .6s ease';
    obs.observe(item);
  });

});

