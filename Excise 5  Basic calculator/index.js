var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        this.validateInputs(a, b);
        return a + b;
    };
    //substracting
    Calculator.prototype.subtract = function (a, b) {
        this.validateInputs(a, b);
        return a - b;
    };
    //multiplying
    Calculator.prototype.multiply = function (a, b) {
        this.validateInputs(a, b);
        return a * b;
    };
    //division
    Calculator.prototype.divide = function (a, b) {
        this.validateInputs(a, b);
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    };
    Calculator.prototype.validateInputs = function (a, b) {
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Invalid input. Both operands must be numbers.");
        }
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(5, 3)); // Output: 8
console.log(calc.subtract(5, 3)); // Output: 6
console.log(calc.multiply(5, 3)); // Output: 42
console.log(calc.divide(5, 3)); // Output: 5
