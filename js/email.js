function newsletterEmail() {
    emailjs.init('WOOJsVTLL2TnSIie3');
    window.onload = function () {
        document.getElementById('newsletter-form').addEventListener('submit', function (event) {
            event.preventDefault();

            if (document.getElementById('email').value !== "") {

                // these IDs from the previous steps
                emailjs.sendForm('service_nordivo', 'template_y2uhhrx', this)
                    .then(function () {
                        // alert('Your message has been sent!');
                        document.getElementById('email').value = "";
                    }, function (error) {
                        console.log('FAILED...', error);
                        alert('Message sent failed!');
                    });

                document.getElementById('newsletterDialog').click();

            }



        });
    }
}

newsletterEmail();