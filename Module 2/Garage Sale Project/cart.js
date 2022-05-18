
// Cart Array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
// updateCart();

renderCartItems();

// Calculate and Render Subtotal
function renderSubTotal() {
    let totalPrice = 0,
        totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    const subtotalEl = document.querySelector(".subtotal");
    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCartEl.innerHTML = totalItems;
}

// Render Cart Items
function renderCartItems() {
    const cartItemsEl = document.querySelector(".cart-items");
    console.log(cartItemsEl);
    cartItemsEl.innerHTML = "";  //Clear Cart Element
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
            <div class="col-lg-4 col-md-6 d-flex justify-content-center mb-5">
                <div class="card">
                    <div>
                        <img src="${item.imgSrc}" class="card-img-top" alt="${item.name}">
                    </div    
                    <div class="cart-item item-info" onclick="removeItemFromCart(${item.id})">
                        <h5 class="card-title card-body">${item.name}</h5>
                        <p>$${item.price}</p>    
                    </div>
                    <div class="units">
                        <div class="number">Number of items: ${item.numberOfUnits}</div>
                        <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                        <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
                    </div>
                </div>    
            </div>

        `;
    });
}

// Remove Item for Cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}

// Change Number of Units for an item
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {

        let numberOfUnits = item.numberOfUnits;

        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            } else if (action === "plus" && numberOfUnits < item.instock) {
                numberOfUnits++;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}