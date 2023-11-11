document.getElementById('feedback_form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.target;
    const fdata = new FormData(form);
    const data = serialize(fdata);
    // console.log(data);
    sendData(data)

});

document.getElementById('phone_input').addEventListener('input', (e) => {
    phoneNumber = e.target.value
    phoneNumberInput = e.target
    // Удаляем все символы, кроме цифр
    var phoneNumber = phoneNumberInput.value.replace(/\D/g, '');
    // Если номер не начинается с +7, добавляем +7 в начало
    if (!phoneNumber.startsWith('7')) {
        phoneNumber = '7' + phoneNumber;
    }
    // Добавляем символы форматирования
    var formattedPhoneNumber = '+' + phoneNumber.slice(0, 1) + ' (' + phoneNumber.slice(1, 4) + ') ' + phoneNumber.slice(4, 7) + '-' + phoneNumber.slice(7, 9) + '-' + phoneNumber.slice(9, 11);
    // Обновляем значение поля ввода
    phoneNumberInput.value = formattedPhoneNumber;
})

function serialize(data) {
    let obj = {};
    for (let [key, value] of data) {
        if (obj[key] !== undefined) {
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]];
            }
            obj[key].push(value);
        } else {
            obj[key] = value;
        }
    }
    return obj;
}

function alert(element) {
    element.classList.add('err');
    setTimeout(() => {element.classList.remove('err')}, 500);
}

async function sendData(data) {
    if (data.phone == '' && data.name == '') {
        alert(document.getElementById('phone_input'));
        alert(document.getElementById('name_input'));
    } else if (data.phone == '') {
        alert(document.getElementById('phone_input'));
    } else if (data.name == '') {
        alert(document.getElementById('name_input'));
    } else {
        fetch('https://restapi.redither.site/ticket/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type" : "application/json; charset=UTF-8"
            }
        }).then((response) => {
            console.log(response);
        }).then((result) => {
            console.log(result);
        })
    }
}