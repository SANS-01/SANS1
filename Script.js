
// This file would contain any JavaScript functionality
// For this simple portfolio, we don't need much JavaScript
// but we could add functionality like smooth scrolling here

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Display avatar fallback if image fails to load
  document.querySelectorAll('.avatar-image').forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      this.nextElementSibling.style.display = 'flex';
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const sendEmailBtn = document.getElementById('sendEmailBtn');
    if (sendEmailBtn) {
        sendEmailBtn.addEventListener('click', function() {
            window.location.href = 'mailto:alamat_email@contoh.com';
        });
    }
});


