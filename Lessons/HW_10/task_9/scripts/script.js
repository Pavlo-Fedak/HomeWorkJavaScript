// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


let priceBlock = document.getElementById('priceBlock');

let price = JSON.parse(localStorage.getItem('price')) || 100;
let lastUpdateTime = JSON.parse(localStorage.getItem('lastUpdateTime')) || 0;

let now = Date.now();

if (!lastUpdateTime) {
    localStorage.setItem('lastUpdateTime', JSON.stringify(now));
}
else if (now - lastUpdateTime > 10000) {
    price += 10;

    localStorage.setItem('price', JSON.stringify(price));
    localStorage.setItem('lastUpdateTime', JSON.stringify(now));
}

priceBlock.innerText = price + ' грн';