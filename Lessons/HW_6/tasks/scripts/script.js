// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
//
// ‘lorem ipsum’
//
// ‘javascript is cool’


let a1 = "Hello World";
let a2 = "lorem ipsum";
let a3 = "javascript is cool";

const arr = [a1, a2, a3];

for (const a of arr) {
    console.log(a.length);
}



// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’

let arrUp = [];
for (const string of arr) {
    console.log(string.toUpperCase());
    arrUp.push(string.toUpperCase());
}

console.log(arrUp);




// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

for (const string of arrUp) {
    console.log(string.toLowerCase());
}




// #0b89BkYZwu
//
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
    const a = str.trim();
    console.log(a);
console.log(a.length);




// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

let strr= 'Ревуть воли як ясла повні';
function stringToArray(str)  {
 if(str) {
     let split = str.split(' ');
     return split;
 }
 return [''];
};

console.log(stringToArray(strr));



//– є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

let numbers = [10,8,-7,55,987,-1011,0,1050,0] ;

const string = numbers.map(number => number.toString());
console.log(string);

//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]

let nums = [11,21,3];

function sortNums (numbers, direction) {
    if (direction === 'asc') return numbers.sort((a,b) => a - b);
    if (direction === 'desc') return numbers.sort((a,b) => b - a);
}

console.log(sortNums(nums, 'asc'));


// #yo06d74c1C
// – є масив
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
// {title: ‘Java Complex’, monthDuration: 6},
// {title: ‘Python Complex’, monthDuration: 6},
// {title: ‘QA Complex’, monthDuration: 4},
// {title: ‘FullStack’, monthDuration: 7},
// {title: ‘Frontend’, monthDuration: 4}
// ];
//  — відсортувати його за спаданням за monthDuration
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let courses = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);
console.log(courses);

let filter =  courses.filter(value => value.monthDuration > 5);

console.log(filter);

let map = filter.map((value, index) => {
   value.id = index +1;
   return value;
});
console.log(map);




// взяти з arrays.js масив coursesArray
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// –написати пошук всіх об’єктів, в яких в modules є docker


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sass = coursesArray.filter(course => {
    return course.modules.includes('sass');
});
console.log(sass);

let docker = coursesArray.filter(course => {
    return course.modules.includes('docker');
});
console.log(docker);



//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }


let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let cards = [];

for (const suit of cardSuits) {
    for (const value of values) {
        let color
        if (suit === 'diamond' || suit === 'heart') {
            color = 'red';
        }   else {
            color = 'black';
        }
        cards.push({
            cardSuits: suit,
            values: value,
            color: color
        });
    }
}

console.log(cards);

//     – знайти піковий туз

let spadeAce = cards.find(card =>{
   return card.cardSuits === 'spade' && card.values === 'ace'}
);
console.log(spadeAce);

//  – всі шістки

let sixes = cards.filter(card => card.values === '6');
console.log(sixes);

//  – всі червоні карти

let redCards = cards.filter(card => card.color === 'red');
console.log(redCards);

//  – всі буби

let diamonds = cards.filter(card => card.cardSuits === 'diamond');
console.log(diamonds);

//  – всі трефи від 9 та більше

let clubsFromNine = cards.filter(card =>
    card.cardSuits === 'clubs' &&
    ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.values)
);

console.log(clubsFromNine);




// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }

let groupedCards = cards.reduce((accumulator, card) => {

    if (card.cardSuits === 'spade') {
        accumulator.spades.push(card);
    }

    if (card.cardSuits === 'diamond') {
        accumulator.diamonds.push(card);
    }

    if (card.cardSuits === 'heart') {
        accumulator.hearts.push(card);
    }

    if (card.cardSuits === 'clubs') {
        accumulator.clubs.push(card);
    }

    return accumulator;

}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(groupedCards);