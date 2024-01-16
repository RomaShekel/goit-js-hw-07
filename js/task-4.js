
const form = document.querySelector('.login-form');

const submit = (event) => {
    event.preventDefault();

    const formValue = event.target;
    const emailValue = formValue.elements.email.value.trim();
    const passwordValue = formValue.elements.password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailValue,
        password: passwordValue,
    };

    console.log(formData);

        formValue.reset();
};

form.addEventListener("submit", submit)


