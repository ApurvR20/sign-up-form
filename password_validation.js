const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm');
const button = document.querySelector('button');
const six = document.querySelector('#six');
const error = document.querySelectorAll('.error');

const note = document.createElement('p');
note.textContent = 'Passwords do not match';
note.style.color = 'red';
note.style.fontSize = '12px';

error.forEach(ele => ele.addEventListener('input', ()=>{
    console.log(password.value+" "+confirm_password.value);

    button.disabled = true;
    if(password.value!==confirm_password.value)
    {
        six.appendChild(note);
        button.disabled = true;
        password.style.borderColor = 'red';
        confirm_password.style.borderColor = 'red';
    }
    else{
        six.removeChild(note);
        password.style.borderColor = null;
        confirm_password.style.borderColor = null;

        if(password.value.length > 0 && confirm_password.value.length > 0)
        button.disabled = false;
    }
}))

