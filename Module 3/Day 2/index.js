
// test  script for running with node on windows

// Named Function
function addNamed(a, b) {
    return a + b;
}

// anonymous arrow function expression
const addExpression = (a, b) => a + b;

// anonymous function
const addAnonymous = function (a, b) {
    return a + b;
};

// spread operator
const obj = {
    a: 'hello',
    b: 'wordl!',
};

function fooBar (a = 'foo', b = 'bar') {
    return a + ' ' + b;
}

console.log(fooBar(obj.a, obj.b));


console.log();