document.addEventListener("DOMContentLoaded", function() {
    // code...
    const form = document.querySelector('#sign-up-form');
    const inputs = document.querySelectorAll('input');
    console.log(inputs);
    const fname = document.querySelector('#fname');
    const lname = document.querySelector('#lname');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const regexForEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //validate fname input field
        if(fname.value == "") {
            fname.classList.add('error');
            fname.nextElementSibling.style.display = "block";
            document.querySelector('.fname-err').style.display = "block";
        } else {
            fname.classList.remove('error');
            fname.nextElementSibling.style.display = "none";
            document.querySelector('.fname-err').style.display = "none";
        }
        //validate lname input field
        if(lname.value == "") {
            lname.classList.add('error');
            lname.nextElementSibling.style.display = "block";
            document.querySelector('.lname-err').style.display = "block";
        } else {
            lname.classList.remove('error');
            lname.nextElementSibling.style.display = "none";
            document.querySelector('.lname-err').style.display = "none";
        }
        //validate email input field
        if(!regexForEmail.test(email.value)) {
            email.classList.add('error');
            email.style.color = "#ff7a7a";
            email.nextElementSibling.style.display = "block";
            document.querySelector('.email-err').style.display = "block";
        } else {
            email.classList.remove('error');
            email.style.color = "#3e3c49";
            email.nextElementSibling.style.display = "none";
            document.querySelector('.email-err').style.display = "none";
        }
        //validate password input field
        if(password.value == "") {
            password.classList.add('error');
            password.nextElementSibling.style.display = "block";
            document.querySelector('.password-err').style.display = "block";
        } else {
            password.classList.remove('error');
            password.nextElementSibling.style.display = "none";
            document.querySelector('.password-err').style.display = "none";
        }


    });

}); //end DOM ready