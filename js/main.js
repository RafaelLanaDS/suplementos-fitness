// Navbar interaction script
// ---------------------------
// This file is intentionally minimal and prepared for future enhancements.

const cartButton = document.querySelector('.navbar__cart');
const cartBadge = document.querySelector('.cart__badge');

if (cartButton) {
  cartButton.addEventListener('click', () => {
    if (cartBadge) {
      cartBadge.textContent = String(Number(cartBadge.textContent) + 1);
      cartButton.classList.add('action__button--active');
      setTimeout(() => cartButton.classList.remove('action__button--active'), 300);
    }
  });
}
