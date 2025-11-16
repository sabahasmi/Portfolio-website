// small interactions: nav toggle, form validation + fake send

document.getElementById('year').textContent =
  new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    if (navList.style.display === 'flex') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'flex';
    }
    navList.style.flexDirection = 'column';
  });
}

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.style.color = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formMessage.textContent =
        'Please fill in all required fields.';
      return;
    }

    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!re.test(email)) {
      formMessage.textContent =
        'Please enter a valid email address.';
      return;
    }

    formMessage.style.color = 'var(--muted)';
    formMessage.textContent = 'Sending...';

    setTimeout(() => {
      formMessage.style.color = 'limegreen';
      formMessage.textContent =
        'Thanks — your message has been sent! I will reply shortly.';
      form.reset();
    }, 900);
  });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();

    const id = a.getAttribute('href').slice(1);
    if (!id) return;

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

