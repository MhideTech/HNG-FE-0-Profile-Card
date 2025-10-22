document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const success = document.getElementById("success");

  const errors = {
    name: document.getElementById("error-name"),
    email: document.getElementById("error-email"),
    subject: document.getElementById("error-subject"),
    message: document.getElementById("error-message"),
  };

  let valid = true;

  // Reset errors
  for (const key in errors) errors[key].textContent = "";

  // Validation
  if (!name.value.trim()) {
    errors.name.textContent = "Full name is required.";
    name.setAttribute("aria-describedby", "error-name");
    valid = false;
  }

  if (!email.value.trim()) {
    errors.email.textContent = "Email is required.";
    email.setAttribute("aria-describedby", "error-email");
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.email.textContent = "Please enter a valid email address.";
    email.setAttribute("aria-describedby", "error-email");
    valid = false;
  }

  if (!subject.value.trim()) {
    errors.subject.textContent = "Subject is required.";
    subject.setAttribute("aria-describedby", "error-subject");
    valid = false;
  }

  if (!message.value.trim()) {
    errors.message.textContent = "Message is required.";
    message.setAttribute("aria-describedby", "error-message");
    valid = false;
  } else if (message.value.trim().length < 10) {
    errors.message.textContent = "Message must be at least 10 characters.";
    message.setAttribute("aria-describedby", "error-message");
    valid = false;
  }

  // Show success
  if (valid) {
    success.hidden = false;
    this.reset();
  } else {
    success.hidden = true;
  }
});
