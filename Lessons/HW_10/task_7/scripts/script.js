// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void


 function addToLocalStorage(arrayName, objToAdd) {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error ("there is no such array");
    }
    const array = JSON.parse(lsItem);
    if (typeof objToAdd === "object") {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
 }
 addToLocalStorage('sessionsList', {});