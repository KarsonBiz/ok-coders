console.log("Hello World!");
const clickMe = document.getElementById("button");
console.log(clickMe);
clickMe.innerHTML = "Click Me!";


// Array Stuff
const testArray = [];
console.log(testArray.length);

const arrayWithStuff = [0, 1, 2, 4];
console.log(arrayWithStuff.length);

console.log(arrayWithStuff[0]);

const messyArray = [0, true, "false"];
console.log(messyArray);

const myShoppingCart = ["coffee", "tea", "la croix", "beer"];
console.log(myShoppingCart);
const lastItem = myShoppingCart.pop();
console.log(lastItem);
// .pop() modifies the array to drop the last item
myShoppingCart.push("beer");
console.log(myShoppingCart);
// .push() modifies the array to add an item
console.log(myShoppingCart.join(', '));
// .join() writes out the array in text form, be sure to add a space after the comma

