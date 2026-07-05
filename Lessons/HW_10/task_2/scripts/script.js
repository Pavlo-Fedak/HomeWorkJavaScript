// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const ageInput = document.getElementById('ageInput');

const checkBtn = document.getElementById('checkBtn');

checkBtn.onclick = function () {

    const age = ageInput.value;

    if (age < 18) {
        alert('Вам менше 18 років')
    }else {
        alert('Вам більше 18 років')
    }

};