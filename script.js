document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var formData = new FormData(this);

    // Display form data (You can replace this with your backend API call)
    var formDataObject = {};
    formData.forEach(function(value, key) {
        formDataObject[key] = value;
    });
    console.log(formDataObject);

    // Reset the form
    this.reset();

    // Show a confirmation message with submitted data
    alert('Your message has been submitted!\n\n' +
          'Name: ' + formDataObject.name + '\n' +
          'Email: ' + formDataObject.email + '\n' +
          'Message: ' + formDataObject.message);
});
