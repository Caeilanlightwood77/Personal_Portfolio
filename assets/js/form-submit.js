document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent page reload on form submission
  
    var form = e.target;
    var formData = new FormData(form);
  
    var loading = document.querySelector('.loading');
    var errorMessage = document.querySelector('.error-message');
    var sentMessage = document.querySelector('.sent-message');
  
    loading.style.display = 'block';
    errorMessage.style.display = 'none';
    sentMessage.style.display = 'none';
  
    fetch(form.action, {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      loading.style.display = 'none';
  
      if (data.trim() === 'Email sent successfully!') {
        sentMessage.style.display = 'block';
        form.reset();  // Clear the form after successful submission
      } else {
        errorMessage.style.display = 'block';
        errorMessage.innerText = data;
      }
    })
    .catch(error => {
      loading.style.display = 'none';
      errorMessage.style.display = 'block';
      errorMessage.innerText = 'An error occurred. Please try again later.';
    });
  });
  