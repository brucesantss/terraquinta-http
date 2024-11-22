document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const price = params.get("price");
    const image = params.get("image");

    if (name && price && image) {
        document.querySelector(".product-image img").src = image;
        document.querySelector(".product-image img").alt = name;
        document.querySelector(".product-details h1").textContent = name;
        document.querySelector(".product-details .price").textContent = `${price}`;
    }

    const quantityInput = document.getElementById("quantity");
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");

    // Botão de diminuir quantidade
    decreaseBtn.addEventListener("click", function () {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    // Botão de aumentar quantidade
    increaseBtn.addEventListener("click", function () {
        const currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    const addToCartBtn = document.getElementById("add-to-cart-btn");
    addToCartBtn.addEventListener("click", function () {
        const quantity = document.getElementById("quantity").value;

        const product = {
            name,
            price,
            image,
            quantity: parseInt(quantity),
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProduct = cart.find((item) => item.name === name);
        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        window.location.href = "carrinho.html";
    });
});
