document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  const formMessage = document.getElementById('form-message');

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      formMessage.style.display = 'block';
      formMessage.style.color = 'green';
      formMessage.textContent = 'Thank you! I will get back to you soon...';
      form.reset();
    } else {
      throw new Error('Network response was not ok.');
    }
  }).catch(error => {
    formMessage.style.display = 'block';
    formMessage.style.color = 'red';
    formMessage.textContent = 'Oops! There was a problem submitting your form.';
  });
});