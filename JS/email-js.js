// Inizializza EmailJS con la tua public key      
(function () {
    const YOUR_PUBLIC_KEY = 'UsUS7TEMrX9YZPJ2o';
    emailjs.init(YOUR_PUBLIC_KEY); // Sostituisci con la tua public key
})();

function sendMail(e) {
    const YOUR_SERVICE_ID = 'service_nqdishx';
    const YOUR_TEMPLATE_ID = 'template_t35zeco';
    e.preventDefault();

    // Reset alerts
    document.getElementById('success-alert').style.display = 'none';
    document.getElementById('error-alert').style.display = 'none';

    // Show loading
    document.getElementById('loading').style.display = 'inline-block';
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    // Get form data
    const form = e.target;

    // Send email using EmailJS
    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('success-alert').style.display = 'block';
            form.reset(); // Reset form
        })
        .catch(function (error) {
            console.log('FAILED...', error);
            document.getElementById('error-alert').style.display = 'block';
        })
        .finally(function () {
            // Hide loading and enable button
            document.getElementById('loading').style.display = 'none';
            submitBtn.disabled = false;
        });

    return false;
}
