// Redirect from Intro Page to Storefront Page
const startButton = document.getElementById('startButton');
if (startButton) {
  startButton.addEventListener('click', () => {
    window.location.href = '/storefront.html';
  });
}

// Handle the Customization Form Submission
const customizeForm = document.getElementById('customizeForm');
if (customizeForm) {
  customizeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const base = document.getElementById('base').value;
    const filling = document.getElementById('filling').value;
    const message = document.getElementById('message').value;

    const orderDetails = `Base: ${base}, Filling: ${filling}, Message: "${message}"`;
    window.location.href = `/checkout.html?order=${encodeURIComponent(orderDetails)}`;
  });
}

// Populate the Checkout Page with Order Details
const orderDetailsElement = document.getElementById('orderDetails');
if (orderDetailsElement) {
  const params = new URLSearchParams(window.location.search);
  const order = params.get('order');
  orderDetailsElement.textContent = order || 'No order details found.';
}

// Handle Checkout Confirmation
const confirmOrderButton = document.getElementById('confirmOrderButton');
if (confirmOrderButton) {
  confirmOrderButton.addEventListener('click', () => {
    alert('Thank you for your order!');
    window.location.href = '/contact.html';
  });
}

// Handle Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We’ll get back to you soon.');
  });
}
