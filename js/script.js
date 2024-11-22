// // LocalStorage para Produtos
// document.getElementById('product-form')?.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const productName = document.getElementById('product-name').value;
//     let products = JSON.parse(localStorage.getItem('products')) || [];
//     products.push(productName);
//     localStorage.setItem('products', JSON.stringify(products));
//     displayProducts();
// });

// function displayProducts() {
//     const products = JSON.parse(localStorage.getItem('products')) || [];
//     const productList = document.getElementById('product-list');
//     productList.innerHTML = products.map(p => `<li>${p}</li>`).join('');
// }
// displayProducts();
document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach((card) => {
        card.addEventListener("click", () => {
           
            const name = card.dataset.name;
            const price = card.dataset.price;
            const image = card.dataset.image;

           
            const url = new URL("produto.html", window.location.origin);
            url.searchParams.set("name", name);
            url.searchParams.set("price", price);
            url.searchParams.set("image", image);

            window.location.href = url.toString();
        });
    });
});


