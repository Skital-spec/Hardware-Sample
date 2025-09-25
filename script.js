const modal = document.getElementById('productModal');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalStock = document.getElementById('modalStock');
const modalDescription = document.getElementById('modalDescription');
const buyNowBtn = document.getElementById('buyNow');
const askMoreBtn = document.getElementById('askMore');
const closeModalBtn = document.getElementById('closeModal');

const phone = "254707063818"; // Replace with real shop number

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a navigation link is clicked (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

document.querySelectorAll('.product-card button').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.product-card');
    const name = card.dataset.name;
    const price = card.dataset.price;
    const stock = card.dataset.stock;
    const description = card.dataset.description;

    modalName.textContent = name;
    modalPrice.textContent = price;
    modalStock.textContent = stock;
    modalDescription.textContent = description;

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
  
  // Close menu when clicking outside (for mobile)
  if (!e.target.closest('.nav') && !e.target.closest('.hamburger')) {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
});
