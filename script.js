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
    validateName();
    validateCarYear();
    validateCarMake();
    validateCarModel();
    validateDays();
    validateCreditCard(creditCard.value);
    validateCVV();
    validateExpiration();
})

function validateName() {
    if (/\d/.test(nameField.value) === true || nameField.value === '')
    {
        nameField.parentElement.classList.remove('input-valid');
        nameField.parentElement.classList.add('input-invalid');
    }
    else {
        nameField.parentElement.classList.remove('input-invalid');
        nameField.parentElement.classList.add('input-valid');
    }

}

function validateCarYear() {
    if (carYear.value <= 1900) {
        carYear.classList.remove('input-valid');
        carYear.classList.add('input-invalid');
    }
    else {
        carYear.classList.remove('input-invalid');
        carYear.classList.add('input-valid');
    }
    // let errorEL = document.createElement('p')
    // document.getElementById(divnamehere).appendChild(errorEl)
}
function validateCarMake() {

}
function validateCarModel() {

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

function validateCVV() {

}

function validateExpiration() {
    
}

function validateEmail(input) {

}

// make forms required by doing value === ''