document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  const formMessage = document.getElementById('form-message');

  // Show loading message
  formMessage.style.display = 'block';
  formMessage.style.color = 'blue';
  formMessage.style.fontWeight = '300';
  formMessage.style.textShadow = '0px 0px 6px rgb(0, 191, 255)';
  formMessage.textContent = 'Sending your message...';

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      formMessage.style.color = 'green';
      formMessage.style.textShadow = '0px 0px 6px rgb(0, 255, 242)';
      formMessage.textContent = 'Thank you! I will get back to you soon...';
      form.reset();
    } else {
      throw new Error('Network response was not ok.');
    }
  }).catch(error => {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Oops! There was a problem submitting your form.';
  });
});
