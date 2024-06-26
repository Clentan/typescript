class Calculator {
    add(a: number, b: number): number {
      this.validateInputs(a, b);
      return a + b;
    }
  //substracting
    subtract(a: number, b: number): number {
      this.validateInputs(a, b);
      return a - b;
    }
  //multiplying
    multiply(a: number, b: number): number {
      this.validateInputs(a, b);
      return a * b;
    }
  //division
    divide(a: number, b: number): number {
      this.validateInputs(a, b);
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    }
  
    private validateInputs(a: number, b: number): void {
      if (isNaN(a) || isNaN(b)) {
        throw new Error("Invalid input. Both operands must be numbers.");
      }
    }
  }
  const calc = new Calculator();
  console.log(calc.add(5, 3)); // Output: 8
  console.log(calc.subtract(5, 3)); // Output: 6
  console.log(calc.multiply(5, 3)); // Output: 42
  console.log(calc.divide(5, 3)); // Output: 5

  