const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const ErrorMass = `feyuyrjyr`;
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const v = document.getElementById('input')


username.addEventListener("keyup", function () {
    if (username.value.length < 5) {
        username.style.color = 'red'
        setError(username, 'username must be at least 5 character.')
    } else {
        username.style.color = 'green'
        setSuccess(username)
    }
})

// form.addEventListener('keyup', e => {
//     e.preventDefault();
//
//     validateInputs();
// });
//
// form.addEventListener('submit', e => {
//     e.preventDefault();
//
//     validateInputs();
// });
//
// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');
//
//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }
//
// const setSuccess = element => {
//
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');
//
//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };
//
//
// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
//
//
// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();
//     if ('' === usernameValue) {
//         setError(username, ErrorMass);
//     } else if (usernameValue.length < 6) {
//         setError(username, 'Provide username contains more than 5 characters')
//     } else {
//         setSuccess(username);
//     }
//
//     if (username.value.length < 5) {
//         username.style.color = 'red'
//         setError(username, 'username must be at least 5 character.')
//     } else {
//         username.style.color = 'green'
//         setSuccess(username)
//     }
//
//
//     username.addEventListener('input', validateUsername)
//
//     function validateUsername() {
//         if (username.value.length < 5) {
//             username.style.color = 'red'
//             setError(username, 'username must be at least 5 character.')
//         } else {
//             username.style.color = 'green'
//             setSuccess(username)
//         }
//     }
//
//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }
//
//     if (passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }
//
//     if (password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }
//
// };