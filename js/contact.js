function contactEmail() {
    emailjs.init('WOOJsVTLL2TnSIie3');
    window.onload = function () {
        document.getElementById('contact-form').addEventListener('submit', function (event) {
            event.preventDefault();



            if (document.getElementById('name').value !== "" && document.getElementById('email').value !== "" && document.getElementById('country').value !== "" && document.getElementById('phonenumber').value !== "") {
                // these IDs from the previous steps

                emailjs.sendForm('service_nordivo', 'template_1l60jpq', this)
                    .then(function () {
                        // alert('Your message has been sent!');
                        document.getElementById('name').value = "";
                        document.getElementById('email').value = "";
                        document.getElementById('country').value = "";
                        document.getElementById('phonenumber').value = "";
                        document.getElementById('category').value = "";
                        document.getElementById('message').value = "";

                    }, function (error) {
                        console.log('FAILED...', error);
                        alert('Message sent failed!');
                    });

                document.getElementById('contactDialog').click();
            }

        });
    }
}

contactEmail();