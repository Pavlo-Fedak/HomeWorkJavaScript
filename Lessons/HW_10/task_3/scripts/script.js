// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом



const myForm = document.forms.myForm;


const buttonSubmit = document.getElementById("submit");

buttonSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    const saveName = myForm.name.value;
    const saveSurname = myForm.surname.value;
    const saveAge = myForm.age.value;
    const textForm = document.getElementById("textForm");
    textForm.innerText = saveName + " " + saveSurname + " " + saveAge;
})
