document.addEventListener('DOMContentLoaded', function() {
  // Initialize tooltips and popovers if needed
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  if (tooltipTriggerList.length > 0) {
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // Offset for fixed navbar
          behavior: 'smooth'
        });
        
        // Update active link
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('text-secondary');
          link.classList.add('text-white');
        });
        this.classList.remove('text-white');
        this.classList.add('text-secondary');
      }
    });
  });
  
  // Form validation for search
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput');
      if (searchInput.value.trim() === '') {
        alert('Please enter a search term');
      } else {
        alert('Searching for: ' + searchInput.value);
        // Here you would normally redirect to search results
        searchInput.value = '';
      }
    });
  }
  
  // Add hover effect to destination cards
  const destinationCards = document.querySelectorAll('.destination-card');
  destinationCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('shadow');
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('shadow');
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Form validation for login modal
  const loginButton = document.getElementById('loginButton');
  if (loginButton) {
    loginButton.addEventListener('click', function() {
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      
      if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in all required fields');
      } else {
        alert('Login successful');
        const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
      }
    });
  }
  
  // Form validation for signup modal
  const signupButton = document.getElementById('signupButton');
  if (signupButton) {
    signupButton.addEventListener('click', function() {
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      
      if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please fill in all required fields');
      } else if (password !== confirmPassword) {
        alert('Passwords do not match');
      } else {
        alert('Account created successfully');
        const modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
        modal.hide();
      }
    });
  }
  
  // Highlight the active section based on scroll position
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section, div[id]');
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    if (current) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-secondary');
        link.classList.add('text-white');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.remove('text-white');
          link.classList.add('text-secondary');
        }
      });
    }
  });
});
