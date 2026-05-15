function sendEmail() {

    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    };

    emailjs.send(
        "service_pf0bdlc",
        "template_zeqdwbq",
        templateParams
    )

    .then(() => {
        alert("Email sent !!");
    })

    .catch(() => {
        alert("Email not sent !!");
    });
}