const form = document.forms.form
const firstName = form['f-name']
const lastName = form['l-name']
const email = form.email
const password = form.password
const error = document.getElementsByClassName('error');
const label = document.getElementsByTagName('label');
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const verify = (e) => {
    let isVerified = true;
    if (firstName.value === '') {
        firstName.style.marginBottom = '40px';
        error[0].style.display = 'block';
        label[0].style.display = 'block';
        isVerified = false;
    } else {
        error[0].style.display = 'none';
        firstName.style.marginBottom = '20px';
        label[0].style.display = 'none';
    }
    if (lastName.value === '') {
        lastName.style.marginBottom = '40px';
        error[1].style.display = 'block';
        label[1].style.display = 'block';
        isVerified = false;
    } else {
        error[1].style.display = 'none';
        label[1].style.display = 'none';
        lastName.style.marginBottom = '20px';
    }
    if (email.value === '') {
        email.style.marginBottom = '40px';
        error[2].style.display = 'block';
        label[2].innerHTML = 'Email cannot be empty';
        label[2].style.display = 'block';
        isVerified = false;
    } else if (!email.value.match(pattern)) {
        email.style.marginBottom = '40px';
        error[2].style.display = 'block';
        label[2].style.display = 'block';
        label[2].innerHTML = 'Looks like this is not an email';
    } else {
        error[2].style.display = 'none';
        label[2].style.display = 'none';
        email.style.marginBottom = '20px';
    }
    if (password.value === '') {
        password.style.marginBottom = '40px';
        error[3].style.display = 'block';
        label[3].style.display = 'block';
        isVerified = false;
    } else {
        error[3].style.display = 'none';
        label[3].style.display = 'none';
        password.style.marginBottom = '20px';
    }
    return isVerified;
}

form.addEventListener('submit', (e) => {
    if (verify() === false) {
        e.preventDefault();
    }
})

