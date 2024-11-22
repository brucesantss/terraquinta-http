document.addEventListener("DOMContentLoaded", function () {
    const orderItemsContainer = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");
    const finalTotalElement = document.getElementById("final-total");


    const cart = JSON.parse(localStorage.getItem("cart")) || [];


    if (cart.length === 0) {
        orderItemsContainer.innerHTML = "<p>Seu pedido está vazio.</p>";
        orderTotalElement.textContent = "R$ 0,00";
        finalTotalElement.textContent = "R$ 0,00";
        return;
    }


    let total = 0;

    cart.forEach((product) => {
        const itemTotal = parseFloat(product.price.replace("R$", "").replace(",", ".")) * product.quantity;
        total += itemTotal;

        const orderItem = document.createElement("div");
        orderItem.style.display = "flex"; 
        orderItem.style.alignItems = "center"; 
        orderItem.style.justifyContent = "space-between"; 
        orderItem.style.marginBottom = "15px"; 
        
        orderItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100px; border-radius: 5px; margin-right: 15px;">
            <div style="flex-grow: 1; display: flex; flex-direction: column; align-items: flex-start;">
                <span style="font-weight: bold; font-size: 16px;">${product.name}</span>
                <span style="color: #666; font-size: 14px;">${product.quantity} unidade(s)</span>
            </div>
            <div>
                <span style="color: #4CAF50; font-size: 16px; font-weight: bold;">${product.price}</span>
            </div>
        `;
        orderItemsContainer.appendChild(orderItem);
    });

    orderTotalElement.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
    finalTotalElement.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;

    document.getElementById("back-to-shopping").addEventListener("click", function () {
        window.location.href = "http://127.0.0.1:5500/home.html"; 
    });
});
