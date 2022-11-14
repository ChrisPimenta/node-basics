// Importing a module with require actually invokes it (so if you execute a function on the outer scope)

const num1 = 5;
const num2 = 10;

(function addValues() {
    console.log(`the sum is: ${num1 + num2}`);
})()