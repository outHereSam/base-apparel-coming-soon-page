const emailField = document.getElementById('email');
const button = document.getElementById('send');
let warningMessage = document.querySelector('.warning');

let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener('click', () => {
    if (emailField.value) {
        if (!emailField.value.toLowerCase().match(emailRegex)) {
            // Email is invalid
            emailField.classList.add('error');
            warningMessage.style.display = "block";
        } else {
            emailField.classList.remove('error');
            warningMessage.style.display = "none"; 
        }
    }
});