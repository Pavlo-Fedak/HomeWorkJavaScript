// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному
// перезавантажені сторінки буде додавати до неї +1


let numberValue = +localStorage.getItem("number");

numberValue += 1;
localStorage.setItem("number", numberValue);

document.getElementById("text").innerText = numberValue;
