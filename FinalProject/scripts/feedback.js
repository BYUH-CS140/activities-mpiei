document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const type = document.getElementById("type").value;
  
    if (!name || !email || !message || !type) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Simple validation passed
    document.getElementById("feedbackForm").reset();
    document.getElementById("feedbackResult").style.display = "block";
  });
  