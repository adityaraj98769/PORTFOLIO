// Scroll reveal animation
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    for (let el of reveals) {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    }
  });
  