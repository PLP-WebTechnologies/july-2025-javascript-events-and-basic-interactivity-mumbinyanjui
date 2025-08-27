// ==========================
// Part 1: Event Handling
// ==========================

// Counter button functionality
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterDisplay = document.getElementById("counterDisplay");

// Event listener to increase score on button click
counterBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = "Score: " + count;
});

// ==========================
// Part 2: Interactive Elements
// ==========================

// Light/Dark mode toggle
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleThemeBtn.textContent =
    document.body.classList.contains("dark-mode") ? "☀️ Toggle Light Mode" : "🌙 Toggle Dark Mode";
});

// Collapsible FAQ
const faqToggles = document.querySelectorAll(".faq-toggle");

faqToggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// ==========================
// Part 3: Form Validation
// ==========================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting before validation

  // Get field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formMessage = document.getElementById("formMessage");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  let valid = true;

  // Validate name (must not be empty)
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Validate email with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  // Validate password (min 6 characters)
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // If valid, show success message
  if (valid) {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Form submitted successfully!";
    registerForm.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "❌ Please fix the errors and try again.";
  }
});
