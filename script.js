// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Button animation
function animateButton(button) {
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 150);
}
document.addEventListener("DOMContentLoaded", function() {
  const now = new Date().getTime();
  const airdrops = document.querySelectorAll('.airdrop-card');

  airdrops.forEach(function(airdrop) {
    const endDate = new Date(airdrop.querySelector('.end-date').innerText).getTime();
    const button = airdrop.querySelector('.cta-button');

    if (now > endDate) {
      button.textContent = 'Ended';
      button.disabled = true; // Disable the button after the airdrop ends
      button.style.backgroundColor = '#ff4d4d'; // Red color for ended
    }
  });
});


