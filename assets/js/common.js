/* ─────────────────────────────────────────────────────────────────────────────
 * Global Image Parallax
 * ────────────────────────────────────────────────────────────────────────── */
window.addEventListener('scroll', function() {
  const scroll = window.scrollTop || document.documentElement.scrollTop ||
      document.body.scrollTop;
  const headerImage = document.querySelector('.site-header');
  if (headerImage) {
    // headerImage.style.transform = `translate3d(0, ${scroll / 5}px, 0)`;
  }
});
