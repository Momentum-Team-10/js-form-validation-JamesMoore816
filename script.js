// Form
const parkingForm = document.getElementById("parking-form");
// Input fields
const nameField = document.getElementById("name");
const carYear = document.getElementById("car-year");
const carMake = document.getElementById("car-make");
const carModel = document.getElementById("car-model");
const startDate = document.getElementById("start-date");
const days = document.getElementById("days");
const creditCard = document.getElementById("credit-card");
const cvv = document.getElementById("cvv");
const expiration = document.getElementById("expiration");

parkingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validateName(nameField);
    validateCarYear(carYear);
    validateCarMake(carMake);
    validateCarModel(carModel);
    validateDays(days);
    validateCreditCard(creditCard);
    validateCVV(cvv);
    validateExpiration(expiration);
})

function validateName(input) {
    if (/\d/.test(input.value) === true || input.value === '') {
        input.parentElement.classList.remove('input-valid');
        input.parentElement.classList.add('input-invalid');
    }
    else {
        input.parentElement.classList.remove('input-invalid');
        input.parentElement.classList.add('input-valid');
    }
}

function validateCarYear(input) {
    if (input.value < 1900 || input.value === '') {
        input.classList.remove('input-valid');
        input.classList.add('input-invalid');
    }
    else {
        input.classList.remove('input-invalid');
        input.classList.add('input-valid');
    }
    // let errorEL = document.createElement('p')
    // document.getElementById(divnamehere).appendChild(errorEl)
}
function validateCarMake(input) {
    if (input.value === '') {
        input.classList.remove('input-valid');
        input.classList.add('input-invalid');
    }
    else {
        input.classList.remove('input-invalid');
        input.classList.add('input-valid');
    }
}
function validateCarModel(input) {
    if (input.value === '') {
        input.classList.remove('input-valid');
        input.classList.add('input-invalid');
    }
    else {
        input.classList.remove('input-invalid');
        input.classList.add('input-valid');
    }

}
// function validateStartDate() {
//     if (moment(input.value).isBefore(now))

// }
function validateDays() {
    if (days.value > 0) {
        days.parentElement.classList.remove('input-invalid');
        days.parentElement.classList.add('input-valid');
    }
    else {
        days.parentElement.classList.remove('input-valid');
        days.parentElement.classList.add('input-invalid');
    }
}
function validateCreditCard(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

function validateCVV(input) {
    if (input.value.length != 3) {
        input.parentElement.classList.remove('input-valid');
        input.parentElement.classList.add('input-invalid');
    }
    else {
        input.parentElement.classList.remove('input-invalid');
        input.parentElement.classList.add('input-valid');
    }

}

function validateExpiration(input) {
    let month = input.value.substring(0,2)
    let year = input.value.substring(3,5)
    let validMonth = month > 0 && month <= 12
    // let validYear = 
    let validSlash = input.value.indexOf('/') === 2
    console.log(month)
    console.log(year)
    console.log(validSlash)

}

function validateEmail(input) {

}

// make forms required by doing value === ''