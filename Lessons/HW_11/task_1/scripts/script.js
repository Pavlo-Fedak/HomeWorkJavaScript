const cartsContainer = document.getElementById("carts");

fetch("https://dummyjson.com/carts")
.then(response => response.json())
    .then(cartsObject => {
    const  {carts} = cartsObject;

    console.log(carts);

    for (const cart of carts) {
        const cartDiv = document.createElement("div");
        cartDiv.classList.add("cart-container");

        const cartTitle = document.createElement("h2");
        cartTitle.innerText = `Корзина №${cart.id}`;
        cartDiv.appendChild(cartTitle);

        const cartInfo = document.createElement("div");

        cartInfo.innerText = `
        id: ${ cart.id}
        total: ${ cart.total}
        discountedTotal: ${cart.discountedTotal}
        userId: ${cart.userId}
        totalProducts: ${cart.totalProducts}
        totalQuantity: ${cart.totalQuantity}
        `;
            cartDiv.appendChild(cartInfo);

        const productsTitle = document.createElement("h3");
        productsTitle.innerText = "Products";

        cartDiv.appendChild(productsTitle);

        for (const product of cart.products) {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-container");

            productDiv.innerText = `
            id: ${product.id}
            title: ${product.title}
            price: ${product.price}
            quantity: ${product.quantity}
            total: ${product.total}
            discountPercentage: ${product.discountPercentage}
            discountedTotal: ${product.discountTotal}
            thumbnail: ${product.thumbnail}
            `;

            const productImage = document.createElement("img");

            productImage.src = product.thumbnail;
            productImage.alt = product.title;

            productDiv.appendChild(productImage);
            cartDiv.appendChild(productDiv);

        }
        cartsContainer.appendChild(cartDiv);

    }

})