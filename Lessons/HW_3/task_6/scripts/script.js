// #Hdjws7E
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
//
// побудувати структуру по шаблону
//
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон

let products = [

    {
        title: 'milk',
        price: 22,
        image: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_354060824-1024x683.jpeg'
    },

{
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
},

{
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
},

{
        title: 'tea',
        price: 15,
        image: 'https://cdn.britannica.com/12/180112-138-DBC1C64A/tea-cultivation-brewing.jpg?w=800&h=450&c=crop'
},
];

for (const product of products) {
    document.write(` <div class="product-card">

        <h3 class="product-title">${product.title}. Price – ${product.price}</h3>

        <img src="${product.image}" alt='' class=”product-image”>

</div>`);
}