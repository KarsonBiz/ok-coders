const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((n) => {
    if (n % 2 === 0 || n === 0) {
        return n;
    }
})

console.log(evenNumbers);

// another way to write it:
// const evenNumbers = numbers.filter((number) => n % 2 === 0);

// can also write a for loop
// const nonFilterEvenNumbers = []
// for (var i =0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         nonFilterEvenNumbers.push(numbers[i])
//     }
// }
