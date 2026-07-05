// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий
// – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.





let rowsInput = document.getElementById('rows');
let colsInput = document.getElementById('cols');
let contentInput = document.getElementById('content');
let btn = document.getElementById('btn');
let tableContainer = document.getElementById('tableContainer');

btn.onclick = function () {

    let rows = rowsInput.value;
    let cols = colsInput.value;
    let content = contentInput.value;

    let table = document.createElement('table');
    table.border = '1';

    for (let i = 0; i < rows; i++) {

        let tr = document.createElement('tr');

        for (let j = 0; j < cols; j++) {

            let td = document.createElement('td');
            td.innerText = content;

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
};