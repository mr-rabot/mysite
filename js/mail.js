document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "rjii.soft1122@gmail.com",  // Your Gmail address
        Password: "moedcbygeeznolon",  // App Password or actual password (if less secure apps enabled)
        To: 'rjii.soft1122@gmail.com',  // Replace with your receiving email
        From: email,  // The sender's email from the form
        Subject: `New Contact Form Submission from ${name}`,
        Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
      }).then(
        message => alert("Message sent successfully!"),
        error => alert("Failed to send message: " + error)
      );
  });