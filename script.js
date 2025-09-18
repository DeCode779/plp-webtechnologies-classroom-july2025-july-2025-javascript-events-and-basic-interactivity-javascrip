// ==============================
// Part 1: Event Handling
// ==============================
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

// Show message when button is clicked
clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "Button clicked! 🎉";
});

// ==============================
// Part 2: Interactive Elements
// ==============================

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Feature
let counter = 0;
const counterValue = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.classList.toggle("hidden");
  faqQuestion.textContent = faqAnswer.classList.contains("hidden")
    ? "What is JavaScript? ▼"
    : "What is JavaScript? ▲";
});

// ==============================
// Part 3: Form Validation
// ==============================
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formSuccess = document.getElementById("formSuccess");

// Validate form before submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Validate Name
  if (nameInput.value.trim().length < 2) {
    document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validate Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Validate Password
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!passwordPattern.test(passwordInput.value)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters and include a number.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success Feedback
  if (valid) {
    formSuccess.textContent = "✅ Form submitted successfully!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});