const shoppingCart = [];
const chandelierButton = document.getElementById("chandelier-add");

function chandelierClick () {
    console.log("clicked chandelier");
    shoppingCart.push([500, "chandelier-add", "Chandelier"]);
}

chandelierButton.addEventListener('click', chandelierClick);