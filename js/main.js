//// ======================= This is For an Aimations of Body =========================== ////
const sign_in_link = document.querySelector("#sign-in-link");
const sign_up_link = document.querySelector("#sign-up-link");
const container = document.querySelector(".form-validation");
const bodyBgColor = document.getElementById("body");
//// This is For Change Color Background Body ////
sign_up_link.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
    bodyBgColor.classList.add("backgrandColor")
});
sign_in_link.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
    bodyBgColor.classList.remove("backgrandColor")
});
//// ======================= These are Functions for Helps =========================== ////
//// These are Functions for Adding Classes ////
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message? message : "";
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message? message : "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
//// ======================= These are Functions for Regex Validation =========================== ////
//// This Function for Username Validation ////
const isValidUsername = (namev, input) => {
    const lengthAtLeast =  new RegExp ('(?=.{5,}$)')
    const lengthTail = new RegExp ('(?=.{30}$)')
    const justNumber = new RegExp(/^\d/);
    const special = new RegExp('(?=.*[!@#\$%\^&+=§*±{}.,?/\|"])')
    const startUnderscore =  new RegExp('(?=.*^[_-])')
    const notRepeatMore4Character =  new RegExp(/([a-zA-Z0-9_-])\1{4,}/)
    if(startUnderscore.test(namev)){
        setError(input, 'Please do not start with (_) underscore and (-) dash');
    }else if(justNumber.test(namev)){
        setError(input, 'Please do not start with only numbers or enter just numbers');
    }else if(special.test(namev)){
        setError(input, 'Please do not enter special characters except (_) underscore and (-) dash');
    }else if(notRepeatMore4Character.test(namev)){
        setError(input, 'Please do not repeat the character more 4');
    }else if(lengthTail.test(namev)){
        setError(input, 'Please do not enter more than 30 characters');
    }else if(!lengthAtLeast.test(namev)){
        setError(input, 'Please enter at least 5');
    }else{
        setSuccess(input, 'This username is ture' );
        return true
    }
}
//// This Function for Email Validation ////
const isValidEmail = emailv => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailv).toLowerCase());
}
//// This Function for Password Validation ////
const isValidPassword = passwordv => {
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    const special = new RegExp('(?=.*[!@#\$%\^&*])')
    const lengthAtLeast =  new RegExp ('(?=.{8,}$)')
    const lengthTail = new RegExp ('(?=.{28}$)')
    // These are regexp
    if(!lower.test(passwordv)){
        setError(password, 'Please enter at least one lowercase letter');
    }else if(!upper.test(passwordv)){
        setError(password, 'Please enter at least one uppercase letter');
    }else if(!number.test(passwordv)){
        setError(password, 'Please enter at least one number');
    }else if(!special.test(passwordv)){
        setError(password, 'Please enter at least one special character');
    }else if(!lengthAtLeast.test(passwordv)){
        setError(password, 'Please enter at least 8 characters');
    }else if(lengthTail.test(passwordv)){
        setError(password, 'Please do not enter more than 28 characters');
    }else{
        setSuccess(password, 'This password is ture' );
        return true
    }
}
//// ======================= This Section is for Sign up =========================== ////
const formSignup = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('signup-password');
const checked = document.getElementById('checked');
const condition = document.getElementById('condition');
const singup_btn = document.getElementById('signup-btn');
//// These are Variables ////
let isUsernameSignup = false;
let isEmailSignup = false;
let isPasswordSignup = false;
let isCheckedSignup = false;
//// This Function is for Validation SignUp Form ////
const validSignUpForm = (e) => {
    let fields = document.getElementsByClassName('field');
    for(let i = 0 ; i < fields.length ; i++) {
        //// This is for username ////
        if(fields[i].id === 'username'){
            const usernameinput = fields[i];
            if(e.target.id === 'username' || e.type === "submit"){
                const usernameFun = () => {
                    const usernameValue = usernameinput.value
                    if(usernameValue === '') {
                        setError(username, 'Username is required');
                        isUsernameSignup = false
                    }else if(!isValidUsername(usernameValue ,username)){
                        isValidUsername(usernameValue, username)
                        isUsernameSignup = false
                    }else{
                        setSuccess(username, 'This username is ture');
                        isUsernameSignup = true;
                    }
                    return isUsernameSignup;
                }
                usernameFun()
            }
        }
        //// This is for email ////
        if(fields[i].id === 'email'){
            const emailinput= fields[i];
            if(e.target.id === 'email' || e.type === "submit"){
                const emailFun = () => {
                    const emailValue = emailinput.value
                    if(emailValue === '') {
                        setError(email, 'Email is required');
                        isEmailSignup = false
                    }else if (!isValidEmail(emailValue)) {
                        setError(email, 'Please provide a valid email address');
                        isEmailSignup = false
                    }else{
                        setSuccess(email, 'This email is true');
                        isEmailSignup = true
                    }
                    return isEmailSignup;
                }
                emailFun()
            }
        }
        //// This is for password ////
        if(fields[i].id === 'signup-password'){
            const passwordinput = fields[i];
            if(e.target.id === 'signup-password' || e.type === 'submit'){
                const passwordFun = () => {
                    const passwordValue = passwordinput.value
                    if(passwordValue === '') {
                        setError(password, 'Password is required');
                        isPasswordSignup = false
                    }else if (!isValidPassword(passwordValue)) {
                        isValidPassword(passwordValue)
                        isPasswordSignup = false
                    }else{
                        isPasswordSignup = true
                    }
                    return isPasswordSignup;
                }
                passwordFun()
            }
        }
         //// This is for checked ////
        if(fields[i].id === 'checked'){
            const checkedinput  = fields[i];
            if(e.target.id === 'checked' || e.type === 'submit'){
                const checkFun = () => {
                    const checkedValue = checkedinput.checked
                    if(!checkedValue) {
                        setError(condition, 'Please check this box if you want to proceed');
                        isCheckedSignup = false
                    }else{
                        setSuccess(condition);
                        isCheckedSignup = true
                    }
                }
                checkFun()
            }
        }
    }
    if(isUsernameSignup === false || isEmailSignup === false || isPasswordSignup === false || isCheckedSignup === false) {
        e.preventDefault();
        singup_btn.setAttribute("disabled", "disabled")
    }else {
        singup_btn.removeAttribute("disabled")
    }
}
//// These are for events ////
formSignup.addEventListener("keyup", validSignUpForm);
formSignup.addEventListener("change", validSignUpForm);
formSignup.addEventListener("submit", validSignUpForm);
//// ======================= This Section is for Sign in =========================== ////
const formSignin = document.getElementById('signin-form');
const usernameEmail = document.getElementById('username-or-email');
const passwordSignin = document.getElementById('signin-password');
const checkedRemember = document.getElementById('remember');
const signin_btn = document.getElementById('signin-btn');
//// These are Variables ////
let isUsernameSignin = false;
let isPasswordSignin = false;
let isCheckedSignin = false;
//// This Function is for Validation SignIn Form ////
const validSignInForm = (e) => {
    let fieldSignin = document.getElementsByClassName('field-signin');
    for(let i = 0 ; i < fieldSignin.length ; i++){
        //// This is for username or email ////
        if(fieldSignin[i].id === 'username-or-email'){
            const usernameinput = fieldSignin[i];
            if(e.target.id === 'username-or-email' || e.type === "submit"){
                const usernameFun = () => {
                    const usernameValue = usernameinput.value
                    if(usernameValue === '') {
                        setError(usernameEmail, 'Username or Email is required');
                        isUsernameSignin = false
                    }else if(usernameValue.includes('@')){
                        if (!isValidEmail(usernameValue)) {
                            setError(usernameEmail, 'Please provide a valid email address');
                            isUsernameSignin = false
                        }else{
                            usernameEmail.type = "email"
                            setSuccess(usernameEmail, 'This email is true');
                            isUsernameSignin = true
                        }
                    }else if(!usernameValue.includes('@')){
                        if(!isValidUsername(usernameValue, usernameEmail)){
                            isValidUsername(usernameValue, usernameEmail)
                            isUsernameSignin = false
                        }else{
                            usernameEmail.type = "text"
                            setSuccess(usernameEmail, 'This username is ture');
                            isUsernameSignin = true;
                        }
                    }else{
                        setSuccess(usernameEmail, 'This username is ture');
                        isUsernameSignin = true;
                    }
                    return isUsernameSignin;
                }
                usernameFun()
            }
        }
        //// This is for password ////
        if(fieldSignin[i].id === 'signin-password'){
            const passwordinput = fieldSignin[i];
            if(e.target.id === 'signin-password' || e.type === "submit"){
                const passwordFun = () => {
                    const passwordValue = passwordinput.value
                    if(passwordValue === '') {
                        setError(passwordSignin, 'Password is required');
                        isPasswordSignin = false
                    }else{
                        setSuccess(passwordSignin, 'This password is ture');
                        isPasswordSignin = true
                    }
                    return isPasswordSignin;
                }
                passwordFun()
            }
        }
        //// This is for remember checked ////
        if(fieldSignin[i].id === 'remember'){
        const checkedinput  = fieldSignin[i];
        if(e.target.id === 'remember' || e.type === "submit"){
            const checkFun = () => {
                const checkedValue = checkedinput.checked
                if(!checkedValue) {
                    isCheckedSignin = false
                }else{
                    isCheckedSignin = true
                }
            }
            checkFun()
        }
        }
    }
    if(isUsernameSignin === false || isPasswordSignin === false) {
        e.preventDefault();
        signin_btn.setAttribute("disabled", "disabled")
    }else {
        signin_btn.removeAttribute("disabled")
    }
};
//// These are for events ////
formSignin.addEventListener("keyup", validSignInForm);
formSignin.addEventListener("change", validSignInForm);
formSignin.addEventListener("submit", validSignInForm);