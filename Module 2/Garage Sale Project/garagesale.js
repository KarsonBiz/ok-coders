const products = [
    {
        id: 0,
        name: "Chandelier",
        price: 500,
        instock: 1,

    },
    {
        id: 1,
        name: "Painting by Tutu",
        price: 150,
        instock: 1,

    },
    {
        id: 2,
        name: "Porcelain Vases",
        price: 100,
        instock: 1,

    },
    {
        id: 3,
        name: "Quartz Geode",
        price: 30,
        instock: 1,

    },
    {
        id: 4,
        name: "Mona Lisa Paintings",
        price: 75,
        instock: 1,

    },
    {
        id: 5,
        name: "Pro-Am Decanter",
        price: 100,
        instock: 1,

    },
]

// Select the Elements
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// Show each product
function renderProducts() {
    products.forEach((product) => {
      productsEl.innerHTML += 
            <div class="item">
                  <div class="item-container">
                      <div class="desc">
                          <h2>${product.name}</h2>
                          <h2>${product.price}</h2>
                      </div>
                      <div class="add-to-cart" onclick="addToCart(${product.id})">
                      </div>
                  </div>
            </div>
        ;
    });
}

renderProducts();

// Shopping Cart
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// Add to Cart
function addToCart(id) {
  // check if product already exist in cart
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

// Update the Cart
function updateCart() {
    renderCartItems();
    renderSubtotal();
  
    // Saves the selected cart to Local Storage
    localStorage.setItem("CART", JSON.stringify(cart));
  }
  
  // Generate and show Subtotal
  function renderSubtotal() {
    let totalPrice = 0,
      totalItems = 0;
  
    cart.forEach((item) => {
      totalPrice += item.price * item.numberOfUnits;
      totalItems += item.numberOfUnits;
    });
  
    subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCartEl.innerHTML = totalItems;
  }

  // Show cart items
function renderCartItems() {
    cartItemsEl.innerHTML = ''; // clear cart element
    cart.forEach((item) => {
      cartItemsEl.innerHTML += 
          <div class="cart-item">
              <div class="item-info" onclick="removeItemFromCart(${item.id})">
                  <h4>${item.name}</h4>
              </div>
              <div class="unit-price">
                  <small>$</small>{item.price}
              </div>
              <div class="units">
                  <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                  <div class="number">${item.numberOfUnits}</div>
                  <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
              </div>
          </div>
        ;
    });
  }

  // Remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
  
    updateCart();
  }
  
  // Change the number of units for each item
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