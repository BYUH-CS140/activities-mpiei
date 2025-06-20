document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const phone = this.phone.value.trim();
    const messageEl = document.getElementById('formMessage');
  
    // Basic name & email validation
    if (!name) {
      messageEl.textContent = "Please enter your name.";
      messageEl.style.color = "red";
      return;
    }
  
    if (!validateEmail(email)) {
      messageEl.textContent = "Please enter a valid email address.";
      messageEl.style.color = "red";
      return;
    }
  
    if (!validatePhone(phone)) {
      messageEl.textContent = "Please enter a valid phone number.";
      messageEl.style.color = "red";
      return;
    }
  
    // If all validations pass:
    messageEl.textContent = "Thank you! Your form has been submitted.";
    messageEl.style.color = "green";
    this.reset();
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Phone validation function
  function validatePhone(phone) {
    // Regex matches formats like:
    // +1-123-456-7890, (123) 456-7890, 123-456-7890, 1234567890
    const phoneRegex = /^(\+?\d{1,3}[- ]?)?(\(?\d{3}\)?[- ]?)?\d{3}[- ]?\d{4}$/;
    return phoneRegex.test(phone);
  }
  