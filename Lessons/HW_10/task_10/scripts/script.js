// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів




let users = [];

for (let i = 1; i <= 100; i++) {
    users.push({
        id: i,
        name: `User ${i}`
    });
}

let itemsDiv = document.getElementById('items');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let currentPage = 0;
let itemsPerPage = 10;

function renderPage() {
    itemsDiv.innerHTML = '';

    let start = currentPage * itemsPerPage;
    let end = start + itemsPerPage;

    let pageItems = users.slice(start, end);

    for (let item of pageItems) {
        let div = document.createElement('div');
        div.innerText = `${item.id}. ${item.name}`;
        itemsDiv.appendChild(div);
    }

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = end >= users.length;
}

nextBtn.onclick = function () {
    currentPage++;
    renderPage();
};

prevBtn.onclick = function () {
    currentPage--;
    renderPage();
};

renderPage();