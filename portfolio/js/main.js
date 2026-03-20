/* ===================================================
   PORTFOLIO — main.js
   Smooth scroll, sticky nav, scroll-reveal, mobile nav
   =================================================== */

'use strict';

// ── DOM refs ──
const nav        = document.getElementById('nav');
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');
const allLinks   = document.querySelectorAll('a[href^="#"]');
const reveals    = document.querySelectorAll('.reveal');

/* ──────────────────────────────────────────
   1. STICKY NAV — add .scrolled class on scroll
   ────────────────────────────────────────── */
function handleNavScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll(); // run once on load

/* ──────────────────────────────────────────
   2. SMOOTH SCROLL for all anchor links
   ────────────────────────────────────────── */
allLinks.forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // close mobile menu if open
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ──────────────────────────────────────────
   3. MOBILE HAMBURGER MENU
   ────────────────────────────────────────── */
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav on outside click
document.addEventListener('click', e => {
  if (!nav.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
  }
});

/* ──────────────────────────────────────────
   4. SCROLL REVEAL via Intersection Observer
   ────────────────────────────────────────── */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

reveals.forEach((el, i) => {
  // stagger cards within grid sections
  if (el.closest('.projects__grid') || el.closest('.contact__links') || el.closest('.skills__grid')) {
    el.style.transitionDelay = `${(i % 5) * 0.08}s`;
  }
  observer.observe(el);
});

/* ──────────────────────────────────────────
   5. ACTIVE NAV LINK on scroll
   ────────────────────────────────────────── */
const sections     = document.querySelectorAll('main section[id]');
const navAnchors   = document.querySelectorAll('.nav__link');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
