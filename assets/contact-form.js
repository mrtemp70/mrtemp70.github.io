const form = document.getElementById("contactForm");
const msg = document.getElementById("contact_msg");
const submitBtn = document.getElementById("submitBtn");

const scriptURL =
    "https://script.google.com/macros/s/AKfycbwMUiff2KMH0IKnamLhJIK25dkDW55D4HNZPvXNQJza_fhAfMrpndjfUig3aZ-cH0PN3w/exec";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.value = "Sending...";

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
    })
        .then(() => {
            msg.textContent = "Message sent successfully.";
            msg.style.color = "green";

            form.reset();
        })
        .catch(() => {
            msg.textContent = "Message failed to send!";
            msg.style.color = "red";
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.value = "Send Message";

            setTimeout(() => {
                msg.textContent = "";
            }, 5000);
        });
});