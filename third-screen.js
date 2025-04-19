let cardInput = document.getElementById('card-number');
let nextBttn3 = document.getElementById('next-bttn-3');
let endTimeInput = document.getElementById('end-time');
let cvvInput = document.getElementById('cvv');
let agreeTerms = document.getElementById('agree-terms');

function checkAllFields() {
    const isCardValid = cardInput.value.replace(/\s/g, '').length === 16;
    const isEndTimeValid = /^\d{2}\/\d{2}$/.test(endTimeInput.value);
    const isCvvValid = /^\d{3}$/.test(cvvInput.value);
    const isTermsAccepted = agreeTerms.checked;
    if (nextBttn3) {
        nextBttn3.disabled = !(isCardValid && isEndTimeValid && isCvvValid && isTermsAccepted);
    }}

[cardInput, endTimeInput, cvvInput].forEach(input => {
    input.addEventListener('input', function() {
        if (this === cardInput) {
            let value = this.value.replace(/\D/g, '');
            let formattedValue = '';
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) formattedValue += ' ';
                formattedValue += value[i];
            }
            if (formattedValue.length > 19) formattedValue = formattedValue.substring(0, 19);
            this.value = formattedValue;
        }
        if (this === endTimeInput) {
            let value = this.value.replace(/[^\d]/g, '');
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            if (value.length > 5) value = value.substring(0, 5);
            this.value = value;
        }
        if (this === cvvInput) {
            this.value = this.value.replace(/\D/g, '').substring(0, 3);
        }
        checkAllFields();
    });
});

if (agreeTerms) agreeTerms.addEventListener('change', checkAllFields);

nextBttn3 = document.getElementById('next-bttn-3');
nextBttn3.addEventListener('click', () => {
    document.getElementById("third-registration-screen").style.display = 'none';
    document.getElementById("end-registration-screen").style.display = 'flex';
});

let backBttn2 = document.getElementById('back-bttn2');
backBttn.addEventListener('click', () => {
    document.getElementById("third-registration-screen").style.display = 'none';
    document.getElementById("second-registration-screen").style.display = 'flex';
});