const modal = document.getElementById('productModal');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalStock = document.getElementById('modalStock');
const buyNowBtn = document.getElementById('buyNow');
const askMoreBtn = document.getElementById('askMore');
const closeModalBtn = document.getElementById('closeModal');

const phone = "254707063818"; // Replace with real shop number

document.querySelectorAll('.product-card button').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.product-card');
    const name = card.dataset.name;
    const price = card.dataset.price;
    const stock = card.dataset.stock;

    modalName.textContent = name;
    modalPrice.textContent = price;
    modalStock.textContent = stock;

    const messageBuy = `Hi BrightBuild, I want to buy ${name}. (${price}, ${stock} available)`;
    const messageAsk = `Hi BrightBuild, I’d like more info about ${name}.`;

    buyNowBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(messageBuy)}`;
    askMoreBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(messageAsk)}`;

    modal.style.display = 'flex';
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
