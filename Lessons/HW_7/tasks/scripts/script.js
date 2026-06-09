// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)


function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Nikita', 'Ivanov', 'mik@mail.com', '+38054545213'),
    new User(2, 'Ivan', 'Petrov', 'ivan@mail.com', '+38054545213'),
    new User(8, 'Ivan', 'Petrov', 'ivan@mail.com', '+38054545213'),
    new User(3, 'Dima', 'Petrov', 'ivan@mail.com', '+38054545213'),
    new User(4, 'Ivan', 'Petrov', 'ivan@mail.com', '+38054545213'),
    new User(9, 'Ivan', 'Petrov', 'ivan@mail.com', '+38054545213'),
    new User(6, 'Ivan', 'Petrov', 'ivan@mail.com', '+38054545213'),
    new User(10, 'Ivan', 'Petrov', 'ivan@mail.com', '+38054545213'),
    new User(5, 'Ivan', 'Petrov', 'ivan@mail.com', '+38054545213'),
    new User(7, 'Ivan', 'Petrov', 'ivan@mail.com', '+38054545213'),

]
console.log(users);

// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

const functionFilter = (user) => user.id % 2 === 0;

const filterUsers = users.filter(functionFilter);
console.log(filterUsers);




// #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const functionSort = (user1, user2) => user1.id - user2.id;

const sortUsers = users.sort(functionSort);
console.log(sortUsers);





// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname, email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}


const clients = [
    new Client( 1, 'Nikita', 'Ivanov', 'nik@mail.com', '+38054545213', [{title: 'tv', price:12000}], ),
    new Client( 2, 'Nikita', 'Ivanov', 'nik@mail.com', '+38054545213', [{title: 'tv', price:12000}, {title: 'phone', price: 2000}], ),
    new Client( 3, 'Misha', 'Ivanov', 'nik@mail.com', '+38054545213', [{title: 'tv', price:12000}, {title: 'phone', price: 2000}], ),
    new Client( 4, 'Dima', 'Ivanov', 'nik@mail.com', '+38054545213', [{title: 'tv', price:12000}, {title: 'phone', price: 2000}], ),
    new Client( 5, 'Pavlo', 'Ivanov', 'nik@mail.com', '+38054545213', [{title: 'tv', price:12000}, {title: 'phone', price: 2000}, {title: 'sumsung', price: 3000}], ),
    new Client( 6, 'Petro', 'Ivanov', 'nik@mail.com', '+38054545213', [{title: 'tv', price:12000}, {title: 'phone', price: 2000}], ),
    new Client( 7, 'Ivan', 'Ivanov', 'nik@mail.com', '+38054545213', [{title: 'tv', price:12000}, {title: 'phone', price: 2000}], ),
    new Client( 8, 'Nikita', 'Ivanov', 'nik@mail.com', '+38054545213', [{title: 'tv', price:12000}, {title: 'phone', price: 2000},{title: 'tv', price:12000}, {title: 'phone', price: 2000}]),
    new Client( 9, 'Nikita', 'Ivanov', 'nik@mail.com', '+38054545213', [{title: 'tv', price:12000}, {title: 'phone', price: 2000}], ),
    new Client( 10, 'Nikita', 'Ivanov', 'nik@mail.com', '+38054545213', [{title: 'tv', price:12000}, {title: 'phone', price: 2000}], ),
]

const functionClientSort = (user1, user2) => user1.order.length - user2.order.length;

const clientsSort = clients.sort(functionClientSort);
console.log(clientsSort);




// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car (mode, producer, year, maxSpeed, engineVolume) {
    this.mode = mode;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this){
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) {
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
    };
    this.changeYear = function (newYear) {
        if (newYear > 1815) {
            this.year = newYear;
        }
    };
    this.addDriver = function (driverObject) {
        if (driverObject) { this.driver = driverObject; }
    };

};

const car = new Car( 'sssd', 'serwr', 1997, 250, 3.5);


console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(100);

car.changeYear(2000);
car.addDriver({name:'Ivan', year: 1997});
console.log(car);





// #5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Cars {
    constructor(mode, producer, year, maxSpeed, engineVolume) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info () {
        for (const key in this){
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed  (newSpeed) {
        if (newSpeed > 0) {
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
    };
    changeYear (newYear) {
        if (newYear > 1815) {
            this.year = newYear;
        }
    };
    addDriver  (driverObject) {
        if (driverObject) { this.driver = driverObject; }
    };

}


const cars = new Cars( 'sssd', 'serwr', 1997, 250, 3.5);


cars.drive();
cars.info();
cars.increaseMaxSpeed(100);

cars.changeYear(2020);
cars.addDriver({name:'Ivan', year: 1997});
console.log(cars);




// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {

    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella('name1', 20, 30),
    new Cinderella('name2', 21, 31),
    new Cinderella('name3', 22, 32),
    new Cinderella('name4', 23, 33),
    new Cinderella('name5', 24, 34),
    new Cinderella('name6', 25, 35),
    new Cinderella('name7', 26, 36),
    new Cinderella('name8', 27, 37),
    new Cinderella('name9', 28, 38),
    new Cinderella('name0', 29, 39),
];

const prince = new Prince('name123', 30, 34);

for (const cinderella of cinderellas) {
    if(cinderella.footSize === prince.slipper){
        prince.wife = cinderella;
    }
}
console.log(prince.wife);

const findPrinceWife = cinderellas.find(cinderella => cinderella.footSize === prince.slipper);







// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter


const myArray = [10, 20, 30, 40, 50];



// *Через Array.prototype. створити власний foreach
Array.prototype.myForEach = function(callback) {

  for(let i=0; i < this.length; i++){
      callback(this[i]);
  }

};

myArray.myForEach(item => {console.log(`Я отримав число ${item}`); });



// *Через Array.prototype. створити власний filter

Array.prototype.myFilter = function(callback) {

    let result = [];

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i])) {

            result.push(this[i]);

        }

    }

    return result;
}

let myFilterArray = myArray.myFilter(item => item > 25);

console.log(myFilterArray);