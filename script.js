let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function updateSlider() {
  const gallerySlider = document.querySelector('.gallery-slider');
  gallerySlider.style.transform = `translateX(-${currentIndex * 80}%)`;
}


setInterval(nextSlide, 3000);


const newsletterForm = document.querySelector('.newsletter form');
const emailInput = newsletterForm.querySelector('input[type="email"]');
const submitButton = newsletterForm.querySelector('button');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

mobileMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const email = emailInput.value.trim();


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  
  fetch('/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you for subscribing!');
      emailInput.value = ''; 
    } else {
      alert('An error occurred. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });
});

setInterval(nextSlide, 3000);
