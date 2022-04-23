// Select Elements
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// Render Products
function renderProducts() {
    products.forEach( (product) => {
        productsEl.innerHTML += `
        <div class="row">
            <div class="col-lg-4 col-md-6 d-flex justify-content-center mb-5 mb-lg-0">
                <div class="card" style="width: 18rem;">
                    <div class="item">
                        <div class="item-container">
                            <div class="item-img">
                                <img src="${product.imgSrc}" alt="${product.name}">
                            </div>
                            <div class="desc">
                                <h2>${product.name}</h2>
                                <h2><small>$</small>${product.price}</h2>
                                <p>
                                ${product.description}
                                </p>
                            </div>
                            <div class="add-to-wishlist">
                                <img src="./icons/heart.png" alt="add to wish list">
                            </div>
                            <div class="add-to-cart" onclick="addToCart(${product.id})">
                                <img src="./icons/bag-plus.png" alt="add to cart">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div    
        `;
    });
}

renderProducts();

//Cart Array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

//Add to cart
function addToCart(id) {
    // Check if item already exists in cart
    if(cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id);
    } else {
        const item = products.find( (product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits: 1,
        });
    }
  
    updateCart();
}

// Update Cart
function updateCart() {
    renderCartItems();
    renderSubTotal();

    // Save Cart to Local Storage
    localStorage.setItem("CART", JSON.stringify(cart));
}

// Calculate and render Subtotal
function renderSubTotal() {
    let totalPrice = 0,
     totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });

    subtotalEl.innerHTML = ` Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCartEl.innerHTML = totalItems;
}

//Render Cart Items
function renderCartItems() {
    cartItemsEl.innerHTML = "";  // Clear Cart Element
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${item.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
            
        `;
    });
} 

// Remove item from Cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id );

    updateCart();
}

//Change number of units for an item
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {

        let numberOfUnits = item.numberOfUnits;

        if(item.id === id){
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            }   else if (action === "plus" && numberOfUnits < item.instock) {
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