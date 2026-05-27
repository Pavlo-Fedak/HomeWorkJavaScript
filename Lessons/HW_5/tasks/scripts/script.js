// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій !!!
//     #I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangleArea = (a, b) => a * b;

let result = rectangleArea(5, 10);
console.log(result);



// – створити функцію, яка обчислює та повертає площу кола з радіусом r

const circleArea = (r) => Math.PI * r * r;

let resultCircleArea = circleArea(6);

console.log(resultCircleArea);



// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

const cylinderArea = (h, r) => 2 * Math.PI * r * (h + r);

let resultCylinderArea= cylinderArea(10, 5);

console.log(resultCylinderArea);



// – створити функцію, яка приймає масив та виводить кожен його елемент

const showArray = (arr) => {
    for (let item of arr) {
        console.log(item);
    }
};

showArray([10, 20, 30, 'hello', true]);



// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = text => document.write(`<p>${text}</p>`);

createParagraph('Hello JavaScript');



// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createList = text => {

    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);
};

createList('Hello');



//– створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createList2 = (text, count) => {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};

createList2('Hello', 5);



//– створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const createList3 = arr => {
    document.write('<ul>');
    for (let item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
};

createList3([10, 'hello', true, false, 'JavaScript']);



//– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об’єкту окремий блок.

const showUsers = users => {

    for (let user of users) {

        document.write(`
            <div>
                <h2>ID: ${user.id}</h2>
                <p>Name: ${user.name}</p>
                <p>Age: ${user.age}</p>
            </div>
            <hr>
        `);

    }

};

showUsers([
    {id: 1, name: 'Vasya', age: 31},
    {id: 2, name: 'Petya', age: 30},
    {id: 3, name: 'Olya', age: 28}
]);



// – створити функцію, яка повертає найменше число з масиву

const getMinNumber = arr => {

    let min = arr[0];

    for (let number of arr) {

        if (number < min) {

            min = number;

        }

    }

    return min;

};

let resultGetMinNumber = getMinNumber([10, 5, 99, -3, 25]);

console.log(resultGetMinNumber);




//– створити функцію sum(arr), яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = arr => {

    let total = 0;
    for (let number of arr) {
        total += number;

    }
    return total;
};

let resultSum  = sum([1, 2, 10]);

console.log(resultSum);



//– створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {

    let temp = arr[index1];

    arr[index1] = arr[index2];

    arr[index2] = temp;

    return arr;

};

let resultSwap = swap([11, 22, 33, 44], 0, 1);

console.log(resultSwap);




// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {

    for (let currency of currencyValues) {

        if (currency.currency === exchangeCurrency) {

            return sumUAH / currency.value;

        }

    }

};

let resultExchange = exchange(
    10000,
    [
        {currency: 'USD', value: 40},
        {currency: 'EUR', value: 42}
    ],
    'USD'
);

console.log(resultExchange);