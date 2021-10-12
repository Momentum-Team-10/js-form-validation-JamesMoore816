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
    // validateStartDate(startDate);
    validateDays(days);
    validateCreditCard(creditCard);
    validateCreditCardDisplay(creditCard);
    validateCVV(cvv);
    validateExpiration(expiration);
})

function validateName(input) {
    let errorMessage = document.createElement('p');
    errorMessage.id = "name-error";

    if (/\d/.test(input.value) === true || input.value === '') {
        input.parentElement.classList.remove('input-valid');
        input.parentElement.classList.add('input-invalid');
        errorMessage.innerText = "Please enter a valid name.";
        if (!document.getElementById('name-error')) {
            document.getElementById("name-field").appendChild(errorMessage);
        }
        document.querySelector('#name-error').style.color = '#DC2626';
        document.querySelector('#name-error').style.fontSize = '12px';
        return false;
    }
    else {
        input.parentElement.classList.remove('input-invalid');
        input.parentElement.classList.add('input-valid');
        if (document.getElementById('name-error')) document.getElementById('name-error').remove();
        return true;
    }
}

function validateCarYear(input) {
    let errorMessage = document.createElement('p');
    errorMessage.id = "car-year-error";

    if (input.value < 1900 || input.value > 2022 || input.value === '') {
        input.classList.remove('input-valid');
        input.classList.add('input-invalid');
        document.querySelector('#car-year').style.borderColor = '#DC2626';
        errorMessage.innerText = "Please enter a valid car year.";
        if (!document.getElementById('car-year-error')) {
            document.getElementById("car-field").appendChild(errorMessage);
        }
        document.querySelector('#car-year-error').style.color = '#DC2626';
        document.querySelector('#car-year-error').style.fontSize = '12px';
        return false;
    }
    else {
        input.classList.remove('input-invalid');
        input.classList.add('input-valid');
        document.querySelector('#car-year').style.borderColor = '#22C55E';
        if (document.getElementById('car-year-error')) document.getElementById('car-year-error').remove();
        return true;
    }
    // let errorEL = document.createElement('p')
    // document.getElementById(divnamehere).appendChild(errorEl)
}
function validateCarMake(input) {
    let errorMessage = document.createElement('p');
    errorMessage.id = "car-make-error";

    if (input.value === '') {
        input.classList.remove('input-valid');
        input.classList.add('input-invalid');
        const styleThis = document.querySelector('#car-make')
        styleThis.style.borderColor = '#DC2626';
        errorMessage.innerText = "Please enter a valid car make.";
        if (!document.getElementById('car-make-error')) {
            document.getElementById("car-field").appendChild(errorMessage);
        }
        document.querySelector('#car-make-error').style.color = '#DC2626';
        document.querySelector('#car-make-error').style.fontSize = '12px';
        return false;
    }
    else {
        input.classList.remove('input-invalid');
        input.classList.add('input-valid');
        const styleThis = document.querySelector('#car-make')
        styleThis.style.borderColor = '#22C55E';
        if (document.getElementById('car-make-error')) document.getElementById('car-make-error').remove();
        return true;
    }
}
function validateCarModel(input) {
    let errorMessage = document.createElement('p');
    errorMessage.id = "car-model-error";

    if (input.value === '') {
        input.classList.remove('input-valid');
        input.classList.add('input-invalid');
        const styleThis = document.querySelector('#car-model')
        styleThis.style.borderColor = '#DC2626';
        errorMessage.innerText = "Please enter a valid car model.";
        if (!document.getElementById('car-model-error')) {
            document.getElementById("car-field").appendChild(errorMessage);
        }
        document.querySelector('#car-model-error').style.color = '#DC2626';
        document.querySelector('#car-model-error').style.fontSize = '12px';
        return false;
    }
    else {
        input.classList.remove('input-invalid');
        input.classList.add('input-valid');
        const styleThis = document.querySelector('#car-model')
        styleThis.style.borderColor = '#22C55E';
        if (document.getElementById('car-model-error')) document.getElementById('car-model-error').remove();
        return true;
    }

}
// function validateStartDate(input) {
//     if (moment(input.value).isBefore(now)) {
//         days.parentElement.classList.remove('input-invalid');
//         days.parentElement.classList.add('input-valid');
//     }
//     else {
//         days.parentElement.classList.remove('input-valid');
//         days.parentElement.classList.add('input-invalid');
//     }
// }
function validateDays(input) {
    let errorMessage = document.createElement('p');
    errorMessage.id = "days-error";

    if (input.value > 0 && days.value <= 30) {
        input.parentElement.classList.remove('input-invalid');
        input.parentElement.classList.add('input-valid');
        if (document.getElementById('days-error')) document.getElementById('days-error').remove();
        return true;
    }
    else {
        input.parentElement.classList.remove('input-valid');
        input.parentElement.classList.add('input-invalid');
        errorMessage.innerText = "Please enter a number between 1 and 30.";
        if (!document.getElementById('days-error')) {
            document.getElementById("days-field").appendChild(errorMessage);
        }
        document.querySelector('#days-error').style.color = '#DC2626';
        document.querySelector('#days-error').style.fontSize = '12px';
        return false;
    }
}

function validateCreditCard(input) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(input.value))
        return false;
    return luhnCheck(input.value);
}

// Made second function for credit card UX; couldn't get this to work properly in main function
function validateCreditCardDisplay(input) {
    let errorMessage = document.createElement('p');
    errorMessage.id = "cc-error";

    if (validateCreditCard(input) === true) {
        if (document.getElementById('cc-error')) document.getElementById('cc-error').remove();
        input.parentElement.classList.remove('input-invalid');
        input.parentElement.classList.add('input-valid');
    }
    else {
        errorMessage.innerText = "Please enter a valid 16-digit credit card number.";
        if (!document.getElementById('cc-error')) {
            document.getElementById("credit-card-field").appendChild(errorMessage);
        }
        document.querySelector('#cc-error').style.color = '#DC2626';
        document.querySelector('#cc-error').style.fontSize = '12px';
        input.parentElement.classList.remove('input-valid');
        input.parentElement.classList.add('input-invalid');
    }
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
    let errorMessage = document.createElement('p');
    errorMessage.id = "cvv-error";

    if (input.value.length != 3) {
        input.parentElement.classList.remove('input-valid');
        input.parentElement.classList.add('input-invalid');
        errorMessage.innerText = "Please enter your 3-digit CVV number.";
        if (!document.getElementById('cvv-error')) {
            document.getElementById("cvv-field").appendChild(errorMessage);
        }
        document.querySelector('#cvv-error').style.color = '#DC2626';
        document.querySelector('#cvv-error').style.fontSize = '12px';
        return false;
    }
    else {
        input.parentElement.classList.remove('input-invalid');
        input.parentElement.classList.add('input-valid');
        if (document.getElementById('cvv-error')) document.getElementById('cvv-error').remove();
        return true;
    }

}

// Function needs to be updated with moment.js
function validateExpiration(input) {
    let errorMessage = document.createElement('p');
    errorMessage.id = "expiration-error";
    let month = input.value.substring(0, 2)
    let year = input.value.substring(3, 5)
    let validMonth = month > 0 && month <= 12
    let validYear = 0;
    if (month >= 10) {
        validYear = year >= 21;
    }
    else {
        validYear = year > 21;
    }
    let validSlash = input.value.indexOf('/') === 2

    if (validMonth === true && validSlash === true && validYear === true) {
        input.parentElement.classList.remove('input-invalid');
        input.parentElement.classList.add('input-valid');
        if (document.getElementById('expiration-error')) document.getElementById('expiration-error').remove();
        return true;
    }
    else {
        input.parentElement.classList.remove('input-valid');
        input.parentElement.classList.add('input-invalid');
        errorMessage.innerText = "Please enter a valid expiration date.";
        if (!document.getElementById('expiration-error')) {
            document.getElementById("expiration-field").appendChild(errorMessage);
        }
        document.querySelector('#expiration-error').style.color = '#DC2626';
        document.querySelector('#expiration-error').style.fontSize = '12px';
        return false;
    }



}
