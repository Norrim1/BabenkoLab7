document.getElementById('phone-number').addEventListener('input', function() 
{
    let phone = this.value.replace(/\D/g, '');
    let formattedPhone = '';
    
    if (phone.length > 0) {
        formattedPhone = '+' + phone.substring(0, 1);
    if (phone.length > 1) {
        formattedPhone += '(' + phone.substring(1, 4);
    }
    if (phone.length > 4) {
        formattedPhone += ')' + phone.substring(4, 7);
    }
    if (phone.length > 7) {
        formattedPhone += '-' + phone.substring(7, 9);
    }
    if (phone.length > 9) {
        formattedPhone += '-' + phone.substring(9, 11);
    }
}
    
    this.value = formattedPhone;
    validatePhoneNumber();
});

function validatePhoneNumber() {
    let phoneInput = document.getElementById('phone-number');
    const phoneRegex = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    
    if (phoneRegex.test(phoneInput.value)) {
        return true;
    } else {
        return false;
    }
}

let numberBttn = document.getElementById('number-bttn');
numberBttn.addEventListener('click', () => {
    if (!validatePhoneNumber()) {
        alert('Пожалуйста, введите корректный номер телефона');
        return;
    }
    document.getElementById("sms").style.display = 'flex';
});

let codeBttn = document.getElementById('code-bttn');
codeBttn.addEventListener('click', () => {
    let codeInput = document.getElementById('code-number').value;
    if (codeInput.length == 4) {
        document.getElementById('next-bttn-2').disabled = false;
    }
    else{alert('Введите полный код.')}
});

let nextBttn2 = document.getElementById('next-bttn-2');
nextBttn2.addEventListener('click', () => {
    document.getElementById("second-registration-screen").style.display = 'none';
    document.getElementById("third-registration-screen").style.display = 'flex';
});

let backBttn = document.getElementById('back-bttn');
backBttn.addEventListener('click', () => {
    document.getElementById("second-registration-screen").style.display = 'none';
    document.getElementById("first-registration-screen").style.display = 'flex';
});