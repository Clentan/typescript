let myString = "String Value";
console.log(myString);


//Declare a variable that holds a number value and explicitly state its type 
let myNumber: number = 24;
console.log(myNumber);

//Declare a variable that can hold a value of any type
let anyValue: any = "Hold anything";
anyValue = 42;
console.log(anyValue);

//Declare a variable that can hold either a string or a number
let stringOrNumber: string | number = "A string or a number";
stringOrNumber = 123; 
console.log(stringOrNumber);