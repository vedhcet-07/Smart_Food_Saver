document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // Simple validation
    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Email validation using regex
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone validation (10-digit number)
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Show success message
    document.getElementById("successMessage").style.display = "block";

    // Clear form fields
    document.getElementById("contactForm").reset();
  });
