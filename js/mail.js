document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  const formMessage = document.getElementById('form-message');

  formMessage.style.display = 'block';
  formMessage.style.color = 'blue';
  formMessage.style.fontWeight = '300';
  formMessage.style.textShadow = '0px 0px 6px rgb(0, 191, 255)';
  formMessage.textContent = 'Sending your message...';


  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      mode: 'no-cors'  // This bypasses CORS restrictions but limits response handling
  }).then(() => {
      formMessage.style.display = 'block';
      formMessage.style.color = 'green';
      formMessage.style.textShadow = '0px 0px 6px rgb(0, 255, 242)';
      formMessage.textContent = 'Thank you! I will get back to you soon...';
      form.reset();
  }).catch(() => {
      formMessage.style.display = 'block';
      formMessage.style.color = 'red';
      formMessage.textContent = 'Oops! There was a problem submitting your form.';
  });
});
