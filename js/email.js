function newsletterEmail() {
    emailjs.init('WOOJsVTLL2TnSIie3');
    window.onload = function () {
        (function (ss, ex) { window.ldfdr = window.ldfdr || function () { (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments)); }; (function (d, s) { fs = d.getElementsByTagName(s)[0]; function ce(src) { var cs = d.createElement(s); cs.src = src; cs.async = 1; fs.parentNode.insertBefore(cs, fs); }; ce('https://sc.lfeeder.com/lftracker_v1_' + ss + (ex ? '_' + ex : '') + '.js'); })(document, 'script'); })('Xbp1oaEoDeX7EdVj');
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