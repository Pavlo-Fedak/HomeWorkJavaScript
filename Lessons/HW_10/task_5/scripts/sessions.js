let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

for (let session of sessionsList) {
    let div = document.createElement('div');

    div.innerText = `Дата: ${session.date}, Час: ${session.time}`;

    document.body.appendChild(div);
}