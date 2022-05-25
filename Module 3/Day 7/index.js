// Functional Programming
/*
Ignore most of Functional programs
however, two concepts make us better JS developers
1. make our code clean using functions
2. immutability: don't mute (or change) data structures. COPY THEM!
*/


//Without Function Approach:
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenArr = [];

// for( let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     }
// }

// console.log('All evens: ', evenArr);

const plants1 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
let found1;
for (let i = 0; i < plants1.length; i++) {
    if (plants1[i] === 'cabbage') {
        found1 = plants1[i];
    }
}
// console.log('Found the cabbage: ', found1);


// *.pop() approach
const plants2 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
let found2;
while (plants2.length > 0) {
    let plant = plants2.pop();
    if (plant === 'cabbage') {
        found2 = plant;
        break;
    }
}
// console.log('Found the cabbage: ', found2);

// *.find()
const isCabbage = (plant) => plant === 'cabbage';
const plants3 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
let found3 = plants3.find(isCabbage); // can pass a function since this is functional
// console.log('Is this cabbage?', found3);


// *.filter()
const plants4 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
let found4 = plants4.filter(isCabbage); // can pass a function since this is functional
// console.log('Is this cabbage?', found4);

plants4.forEach((element) => {
    // console.log(element);
});


// 3 Main Functional Array Method: map, filter, reduce
// honorable mention: find, findIndex, forEach
// Get array of even numbers with just function approach

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArr = arr2.filter((element) => element % 2 === 0);
// console.log('All evens: ', evenArr);
// console.log('original: ', arr2)


/*
 *Principle: don't mute/change. Make copies
*/

const data = { name: 'Karson Bizzell', age: 30, height: '65' };

function incrementAge(personObject) {
    const copy = { ...personObject };
    copy.age += 1;
    return copy;
}

function decrementHeight(personObject) {
    const copy = { ...personObject };
    copy.height -= 1;
    return copy;
}

function doSomethingWithName(personObject) {
    const copy = { ...personObject };  //copies the original object by using 3 dots before
    copy.name = 'John Doe';
    return copy;
}

const returnedFromIncrementAge = incrementAge(data);
const returnedDecrementHeight = decrementHeight(data);
const returnedDoSomethingWithName = doSomethingWithName(data);


console.log('age', returnedFromIncrementAge);
console.log('height', returnedDecrementHeight);
console.log('name', returnedDoSomethingWithName);
