//Write a function that takes two numbers as parameters and returns their sum
function addNumbers(a: number, b: number): number {
    return a + b;
  }
  let result: number = addNumbers(5, 10);
  console.log(result); 
  //Write a function that returns a fixed number
  function getFixedNumber(): number {
    return 20;
  }
  let result = getFixedNumber();
console.log(result); 

//Write a function that takes a string and an optional boolean parameter. If the boolean 
//is true, return the string in uppercase; otherwise, return it in lowercase
function formatString(str: string, useUppercase?: boolean): string {
    return useUppercase === true ? str.toUpperCase() : str.toLowerCase();
  }
  let result1 = formatString("Hello");
console.log(result1); // Output: hello

let result2 = formatString("World", true);
console.log(result2); // Output: WORLD

let result3 = formatString("TypeScript", false);
console.log(result3); // Output: typescript