document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.querySelector(".cart-items");
    const totalPriceElement = document.getElementById("total-price");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Seu carrinho está vazio!</p>";
        return;
    }

    let total = 0;

    cart.forEach((product) => {
        const itemTotal = parseFloat(product.price.replace("R$", "").replace(",", ".")) * product.quantity;
        total += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-item-details">
                <h3>${product.name}</h3>
                <p>Preço: ${product.price}</p>
                <p>Quantidade: ${product.quantity}</p>
                <p>Total: R$ ${itemTotal.toFixed(2).replace(".", ",")}</p>
            </div>
            <div class="cart-item-actions">
                <img src="images/lixeira.png" alt="Lixeira" style="width: 25px; height: 25px; cursor: pointer;" class="remove-btn" data-name="${product.name}">
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;

    document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const name = btn.dataset.name;

            cart = cart.filter((item) => item.name !== name);
            localStorage.setItem("cart", JSON.stringify(cart));
            
            window.location.reload();
        });
    });

    
});

document.querySelector('.checkout-btn').addEventListener('click', function () {
    // Redireciona para a página "pedidoRealizado.html"
    window.location.href = 'http://127.0.0.1:5500/pedidoRealizado.html';
});