//Write a function that takes two numbers as parameters and returns their sum
function addNumbers(a, b) {
    return a + b;
}
var result = addNumbers(5, 10);
console.log(result);
//Write a function that returns a fixed number
function getFixedNumber() {
    return 20;
}
var result = getFixedNumber();
console.log(result);
//Write a function that takes a string and an optional boolean parameter. If the boolean 
//is true, return the string in uppercase; otherwise, return it in lowercase
function formatString(str, useUppercase) {
    return useUppercase === true ? str.toUpperCase() : str.toLowerCase();
}
var result1 = formatString("Hello");
console.log(result1); // Output: hello
var result2 = formatString("World", true);
console.log(result2); // Output: WORLD
var result3 = formatString("TypeScript", false);
console.log(result3); // Output: typescript
