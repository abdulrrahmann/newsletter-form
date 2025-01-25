// Select containers
let formContainer = document.getElementById("form-container");
let successContainer = document.getElementById("success-container");

// Select the form 
let myForm = document.getElementById("myForm");
// Select Email input
let email = document.getElementById("email");
let errorMessage = document.createElement("span");
// pattern to match emails
const pattern = /[a-zA-Z_0-9]{1,}@[a-zA-Z_0-9]{3,7}.[a-zA-Z]{1,3}/;
errorMessage.className = "error-message";
errorMessage.classList.add("hidden");
errorMessage.innerHTML = "Valid email required";
myForm.appendChild(errorMessage);

myForm.onsubmit = function (e) {
    e.preventDefault();
    console.log(pattern.test(email.value));
    if (pattern.test(email.value)) {
        formContainer.classList.toggle("hidden");
        successContainer.classList.toggle("hidden");
        errorMessage.classList.add("hidden");
        email.classList.remove("error");

        // Update email confirmation
        document.getElementById("email-confirm").innerHTML = email.value;
    } else {
        errorMessage.classList.remove("hidden");
        email.classList.add("error");
    }

}

document.getElementById("dismiss-btn").addEventListener("click", () => { 
    // hide successContainer
    successContainer.classList.add("hidden");
    // show formContainer
    formContainer.classList.remove("hidden");
    // clear the form
    myForm.reset();
});