// Nocturnia MUN — lightweight interactions
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', (event) => {
    // Placeholder application links intentionally do nothing until you add your URLs.
    event.preventDefault();
  });
});

// Add a subtle header state while scrolling.
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 20
    ? '0 10px 40px rgba(0,0,0,.18)'
    : 'none';
});
