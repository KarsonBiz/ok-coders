console.log("hello");

const itemsForSale = [
    {
        id: "coffee-pot",
        price: 50.99,
        name: "Coffee Pot",
        description: " Mocha Master makes the best black coffee FAST!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1nG34YNXlU3r-936XqOrolOmVQf9nqm8nSA&usqp=CAU"
    },
    {
        id: "coffee-grinder",
        price: 65.00,
        name: "Coffee Grinder",
        description: "The Smeg coffee grinder looks as good as it performs!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTbFp_HcR4gKXRdFvm1Mz0RGgBM7u63zYFg&usqp=CAU"
    }
];

const shoppingCart = []

// Creates the space for the item cards
const itemsSlot = document.getElementById("items-slot");

// Adding html format to each of the items
function itemToDisplayHtml(item) {
    const html = `
        <div class="item-card">
            <h4>${item.name}</h4>
            <img src=${item.image}>
            <p>${item.description}</p>
            <em>$${item.price}</em>
            <div>
                <button onclick="addItemToCart('${item.id}')">Add To Cart</button>
            </div>
        </div>
    `;

    return html
};

function addItemToCart(id) {
    shoppingCart.push(id);
};

// Adding the items to the page
function addItemsForSaleToPage() {
    for(var i=0; i < itemsForSale.length; i++) {
        const item = itemsForSale[i];
        const htmlForItem = itemToDisplayHtml(item);
        const appendableElement = document.createElement('div');
        appendableElement.innerHTML = htmlForItem
        itemsSlot.append(appendableElement)
    };
};

addItemsForSaleToPage();