document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameInput = form.user_name;
  const emailInput = form.user_email;
  const messageInput = form.message;
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  // Real-time validation on blur
  nameInput.addEventListener("blur", () => {
    const name = nameInput.value.trim();
    if (!name) {
      nameError.textContent = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      nameError.textContent = "Name should contain only letters and spaces.";
    } else {
      nameError.textContent = "";
    }
  });

  emailInput.addEventListener("blur", () => {
    const email = emailInput.value.trim();
    if (!email) {
      emailError.textContent = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
      } else {
        emailError.textContent = "";
      }
    }
  });

  messageInput.addEventListener("blur", () => {
    const message = messageInput.value.trim();
    if (!message) {
      messageError.textContent = "Message is required.";
    } else if (message.length < 10) {
      messageError.textContent =
        "Message should be at least 10 characters long.";
    } else {
      messageError.textContent = "";
    }
  });

  // Clear errors on input
  nameInput.addEventListener("input", () => {
    nameError.textContent = "";
  });

  emailInput.addEventListener("input", () => {
    emailError.textContent = "";
  });

  messageInput.addEventListener("input", () => {
    messageError.textContent = "";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let hasError = false;

    if (!name) {
      nameError.textContent = "Name is required.";
      hasError = true;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      nameError.textContent = "Name should contain only letters and spaces.";
      hasError = true;
    }

    if (!email) {
      emailError.textContent = "Email is required.";
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        hasError = true;
      }
    }

    if (!message) {
      messageError.textContent = "Message is required.";
      hasError = true;
    } else if (message.length < 10) {
      messageError.textContent =
        "Message should be at least 10 characters long.";
      hasError = true;
    }

    if (hasError) return;

    const whatsappMessage = `Hello, I am ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/919140969179?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    form.reset();
    // Clear errors after reset
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
  });
});
