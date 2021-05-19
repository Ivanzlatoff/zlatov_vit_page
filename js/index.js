const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const isValidPhone = (phone) => {
    const re = /^[\+]?38\s\(0(50|63|66|67|68|91|92|93|96|97)\)\s[0-9]{2}\-[0-9]{2}\-[0-9]{3}$/
    return re.test(String(phone).toLowerCase());
}

$(document).ready(function() {
    $('#phone').mask("+38 (999) 99-99-999");
})

const form = document.querySelector('form');
const contact_me = document.getElementById('contact-me')
const nameInput = document.querySelector('input[name="firstName"]')
const phone = document.querySelector('input[name="phone"]')
const msg = document.querySelector('textarea[name="message"]')

const validateInputs = (input) => {
    if (!input.value) {
        input.setAttribute("style", "border-color: red");
        input.nextElementSibling.classList.remove("hidden");
    } else {
        input.removeAttribute("style");
        input.nextElementSibling.classList.add("hidden");
    }
}

if (document.getElementById('phone').value) {
    if (!isValidPhone(document.getElementById('phone').value)) {
        input.setAttribute("style", "border-color: red");
        input.nextElementSibling.classList.remove("hidden");
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs(nameInput);
    validateInputs(phone);
    validateInputs(msg);
    if (!isValidPhone(phone.value)) {
        alert("Invalid phone number")
        return
    }
    if (nameInput.value && phone.value && msg.value) {
        form.remove();
        document.getElementById('contact-me').remove()
    }
})

nameInput.addEventListener('input', () => {
    validateInputs(nameInput);
})

phone.addEventListener('input', () => {
    validateInputs(phone);
})

msg.addEventListener('input', () => {
    validateInputs(msg);
})

    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.classList.add('success')
    status.innerHTML = "Thanks for your submission!";
  }).catch(error => {
    status.classList.add('success')
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)