// APIs

const fetch = require('cross-fetch');

// Promises
    // A Promise is a proxy for a value not necessarily known when the promise is created. 
    // It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 

console.log('HELLO!');

    // Promise .then
    // used "npm install cross-fetch" to install Fetch to node 

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => console.log("Here's my data. We have " + data.length + ' entries.'));

    console.log('GOODBYE!');

    // look up: https://jsonplaceholder.typicode.com/posts  
   

// Promise Async/Await
    // JavaScript is naturally async
    // Await is another way to write a promsie 

// JSON - "Javascript Object Notation"  
    // only used for data
    // you can use strings, numbers, boolean, objects, and arrays
        // JSON.parse()
            // The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. 
        // JSON.stringify()
            // 

async function main() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
}

main();


// the fetch and the async function run the same command just different ways to write it