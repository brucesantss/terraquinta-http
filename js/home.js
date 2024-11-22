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


