const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (header) {
  const setHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { 
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible'); 
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-stagger').forEach((element) => observer.observe(element));

const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
