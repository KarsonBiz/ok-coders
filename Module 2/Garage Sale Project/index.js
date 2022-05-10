// Cart Array
const cart = JSON.parse(localStorage.getItem("CART")) || [];

// Select Elements
const productsEl = document.querySelector(".products");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

const setTotalItemsInCart = (itemsLength) => {
    if (itemsLength) {
        totalItemsInCartEl.innerHTML = itemsLength;
        return
    }

    totalItemsInCartEl.innerHTML = cart.length;

};

const onPageLoad = () => {
    renderProducts();
    setTotalItemsInCart();
}

const disable = (shouldDisable) => {
    if (shouldDisable) {
        return 'disabled';
    }
    return '';
}

// Render Products
function renderProducts() {
    products.forEach((product) => {
        const productIsInCart = cart.some(cartItem => cartItem.id === product.id);
        console.log("🚀 ~ file: index.js ~ line 27 ~ products.forEach ~ productIsInCart", productIsInCart)
        productsEl.innerHTML += `
            <div class="col-lg-4 col-md-6 d-flex justify-content-center mb-5">
                <div class="card">
                    <div>
                        <img src="${product.imgSrc}" class="card-img-top" alt="${product.name}">
                    </div>
                    <div class="card-body description product-items">
                        <h5 class="card-title header-3">${product.name}</h5>
                        <p class="card-text paragraph-4">${product.description}</p>
                        <p>$${product.price}</p>
                        <button id="${product.id}" class="btn btn-outline-secondary btn-green align-self-end" onclick="addToCart(${product.id})" ${disable(productIsInCart)}>Add to Cart</button>
                    </div>
                </div>   
            </div>    
        `;
    });
}

onPageLoad();



// updateCart();

// Add to Cart
function addToCart(id) {
    const existingItem = cart.find(item => item.id === id)
    if (existingItem) {
        const updatedCart = changeNumberOfUnits(id)
        return updateCart(updatedCart);
    }
    const addProductButton = document.getElementById(id);
    addProductButton.disabled = true;
    const item = products.find((product) => product.id === id);

    const newItem = {
        ...item,
        numberOfUnits: 1,
    };

    updateCart([...cart, newItem]);
}

// Update Cart
function updateCart(updatedCart) {

    // Save Cart to Local Storage
    localStorage.setItem("CART", JSON.stringify(updatedCart));

    setTotalItemsInCart(updatedCart.length);
}

function changeNumberOfUnits(updatedItemId) {
    return cart.map(item => {
        const { numberOfUnits, id } = item;

        if (id === updatedItemId) {
            return {
                ...item,
                numberOfUnits: numberOfUnits + 1,
            };
        }

        return item;
    });
}

