let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Chadelier',
        tag: 'chandelier',
        price: 500,
        inCart: 0,

    },
    {
        name: 'Painting by Tutu',
        tag: 'paintingtutu',
        price: 100,
        inCart: 0,

    },
    {
        name: 'Chinese Porcelain Vases',
        tag: 'porcelainvases',
        price: 100,
        inCart: 0,

    },
    {
        name: 'Quartz Geode',
        tag: 'quartz',
        price: 30,
        inCart: 0,

    },
    {
        name: 'Mona Lisa Paintings',
        tag: 'pairofmonas',
        price: 75,
        inCart: 0,

    },
    {
        name: 'Pro-Am Decanter',
        tag: 'decanter',
        price: 100,
        inCart: 0,

    }
]



for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

// This function makes sure the nav shopping cart displays the correct # items at all times
// Only runs if called on -> add at the bottom
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1); 
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItem(products);
}

function setItem(products) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[products.tag] != undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]:products
            }
        }
        cartItems[products.tag].inCart += 1; 
    } else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers();