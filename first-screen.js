const countries = [
    { value: "bangladesh", text: "Бангладеш" },
    { value: "brazil", text: "Бразилия" },
    { value: "vietnam", text: "Вьетнам" },
    { value: "germany", text: "Германия" },
    { value: "egypt", text: "Египет" },
    { value: "india", text: "Индия" },
    { value: "indonesia", text: "Индонезия" },
    { value: "iran", text: "Иран" },
    { value: "china", text: "Китай" },
    { value: "drc", text: "Конго" },
    { value: "mexico", text: "Мексика" },
    { value: "nigeria", text: "Нигерия" },
    { value: "pakistan", text: "Пакистан" },
    { value: "russia", text: "Россия" },
    { value: "usa", text: "США" },
    { value: "thailand", text: "Таиланд" },
    { value: "turkey", text: "Турция" },
    { value: "philippines", text: "Филиппины" },
    { value: "japan", text: "Япония" },
    { value: "egypt", text: "Египет" }
];

let selectElement = document.getElementById("country-select");
countries.forEach(country => {
    let option = document.createElement("option");
    option.value = country.value;
    option.textContent = country.text;
    selectElement.appendChild(option);
});

let nextBttn = document.getElementById("next-bttn");
let cancelBttn = document.getElementById("cancel-bttn");
let inputs = document.querySelectorAll('.registration-input');
let password = document.getElementById('password');
let password_check = document.getElementById('check-password');
let email = document.getElementById('email');

function checkPasswords() {
    if (password.value !== password_check.value) {
        return false;
    }else {
        return true;
    }
}

function checkEmail()
{
    if(email.value.includes("@"))
    {
        return true;
    }else {
        return false;
    }
}

function checkForm() {
    let allFilled = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') { allFilled = false; } 
    });
    nextBttn.disabled = !allFilled;
}

inputs.forEach(input => {
    input.addEventListener('input', checkForm);
    input.addEventListener('change', checkForm);
});
password.addEventListener('input', checkForm);
password_check.addEventListener('input', checkForm);

cancelBttn.addEventListener('click', () => {
    inputs.forEach(input => {
        if (input.tagName === 'SELECT') {
            input.selectedIndex = 0;
        } else {
            input.value = '';
        }
    });
    nextBttn.disabled = true;
});

nextBttn.addEventListener('click', () => {
    if (!checkPasswords()) {
        alert('Пароли не совпадают!');
        return;
    }
    if (!checkEmail()) {
        alert('Неверная электронная почта!');
        return;
    }
    document.getElementById("first-registration-screen").style.display = 'none';
    document.getElementById("second-registration-screen").style.display = 'flex';
});