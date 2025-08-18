const form = document.getElementById('registration-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event){
    event.preventDefault();

    document.querySelectorAll('.error-message').forEach(el => el.textContent = "");
    document.querySelectorAll('input').forEach(el => el,this.classList.remove('input-error'));
    successMessage.classList.add('hidden');

    let isValid = true;
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if(username.length < 3){
        document.getElementById('username-error').textContent = "Username must be at least 3 characters.";
        document.getElementById('username').classList.add('input-error');
        isValid = false;
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.getElementById('email-error').textContent = "Please enter a valid email address.";
        document.getElementById('email').classList.add('input-error');
        isValid = false;
    }

    if(password.length < 6){
        document.getElementById('password-error').textContent = "Password must be at least 6 characters."
        document.getElementById('password').classList.add('input-error');
        isValid = false;
    }

    if(isValid){
        successMessage.classList.remove('hidden');
        form.classList.add('hidden');
    }
})