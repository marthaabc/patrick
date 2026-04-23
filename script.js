let cart = [];

window.onload = function () {
    let savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
};

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function searchProduct() {
    let input = document.getElementById("search").value.toLowerCase();
    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
        let productName = products[i]
            .getElementsByTagName("h3")[0]
            .innerText
            .toLowerCase();

        if (productName.includes(input)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}