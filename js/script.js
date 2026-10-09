document.getElementById('year').textContent = new Date().getFullYear();
const filterButtons = document.querySelectorAll('.filter');
const productCards = document.querySelectorAll('.product-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle('active', item === button));
  productCards.forEach(card => { card.hidden = filter !== 'todos' && card.dataset.category !== filter; });
}));
