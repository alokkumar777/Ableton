// GSAP Fade-in Animations

function fadeIn(element) {
  gsap.from(element, { opacity: 0, duration: 1, ease: 'power2.out' });
}

function fadeInButton(element) {
  gsap.from(element, { opacity: 0, duration: 0.8, ease: 'power1.out', y: 20 });
}

function fadeInText(element) {
  gsap.from(element, { opacity: 0, duration: 1.2, ease: 'power3.out', y: 30 });
}

function fadeInImage(element) {
  gsap.from(element, { opacity: 0, duration: 1.5, ease: 'power4.out', scale: 0.9 });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gsap-fade-in').forEach(el => {
    fadeIn(el);
  });
  document.querySelectorAll('.gsap-fade-in-button').forEach(el => {
    fadeInButton(el);
  });
  document.querySelectorAll('.gsap-fade-in-text').forEach(el => {
    fadeInText(el);
  });
  document.querySelectorAll('.gsap-fade-in-image').forEach(el => {
    fadeInImage(el);
  });
});
