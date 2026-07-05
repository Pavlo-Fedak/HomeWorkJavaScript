// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
//     При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let kgInput = document.getElementById('kgInput');
let result = document.getElementById('result');

kgInput.oninput = function () {
    let kg = kgInput.value;

    let pounds = kg * 2.20462;

    result.innerText = `${kg} кг = ${pounds} фунтів`;
};