"use strict";

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;

  alert('Sending your message...');

  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      mode: 'no-cors'
  }).then(() => {
      alert('Thank you! I will get back to you soon...');
      form.reset();
      window.location.href = 'https://mr-rabot.github.io/mysite/'; // Redirect to homepage
  }).catch(() => {
      alert('Oops! There was a problem submitting your form.');
  });
});
