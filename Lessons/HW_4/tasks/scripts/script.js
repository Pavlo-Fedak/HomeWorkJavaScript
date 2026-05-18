// #I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

function rectangleArea(a, b) {

    return a * b;

}

let result = rectangleArea(5, 10);

console.log(result);


// – створити функцію, яка обчислює та повертає площу кола з радіусом r

function circleArea(r) {

    return Math.PI * r * r;

}

let resultCircle = circleArea(5);

console.log(resultCircle);

//– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function cylinderArea(h, r) {

    return 2 * Math.PI * r * (h + r);

}

let resultCylinder = cylinderArea(10, 5);

console.log(resultCylinder);


// – створити функцію, яка приймає масив та виводить кожен його елемент

function showArray(arr) {

    for (let item of arr) {

        console.log(item);

    }

}

let numbers = [10, 20, 30, 40];

showArray(numbers);

// – створити функцію, яка створює параграф з текстом
// та виводить його через document.write. Текст задати через аргумент

function createParagraph(text) {

    document.write(`<p>${text}</p>`);

}

createParagraph('Hello world');

// – створити функцію, яка створює ul з трьома елементами li
// та виводить його через document.write. Текст li задати через аргумент всім однаковий

function createList(text) {

    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);

}

createList('Hello');


// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається
// другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function createListLi(text, count) {

    document.write('<ul>');

    for (let i = 0; i < count; i++) {

        document.write(`<li>${text}</li>`);

    }

    document.write('</ul>');
}

createListLi('Hello', 5);

// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write

function createListArr(arr) {

    document.write('<ul>');

    for (const item of arr) {

        document.write(`<li>${item}</li>`);

    }

    document.write('</ul>');
}

createListArr([10, 'hello', true, false, 'JavaScript']);

// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
//     та виводить їх в документ. Для кожного об’єкту окремий блок.

function showUsers(users) {

    for (const user of users) {

        document.write(`
            <div>
                <h2>ID: ${user.id}</h2>
                <p>Name: ${user.name}</p>
                <p>Age: ${user.age}</p>
            </div>
            <hr>
        `);

    }

}

let users = [
    {id: 1, name: 'Vasya', age: 31},
    {id: 2, name: 'Petya', age: 30},
    {id: 3, name: 'Olya', age: 28}
];

showUsers(users);

// – створити функцію яка повертає найменьше число з масиву

function getMinNumber(arr) {

    let min = arr[0];

    for (let number of arr) {

        if (number < min) {
            min = number;
        }

    }

    return min;
}

let numbersGetMin  = [10, 5, 99, -3, 25];

let resultGetMin = getMinNumber(numbersGetMin);

console.log(resultGetMin);

// – створити функцію sum(arr), яка приймає масив чисел,
//     сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {

    let total = 0;

    for (let number of arr) {

        total += number;

    }

    return total;
}

let resultSum = sum([1, 2, 10]);

console.log(resultSum);

// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {

    let temp = arr[index1];

    arr[index1] = arr[index2];

    arr[index2] = temp;

    return arr;
}

let resultSwap = swap([11, 22, 33, 44], 0, 2);

console.log(resultSwap);

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// //
// // Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {

    for (let currency of currencyValues) {

        if (currency.currency === exchangeCurrency) {

            return sumUAH / currency.value;

        }

    }

}

let resultExchange = exchange(
    10000,
    [
        {currency: 'USD', value: 42},
        {currency: 'EUR', value: 52}
    ],
    'USD'
);

console.log(resultExchange);
