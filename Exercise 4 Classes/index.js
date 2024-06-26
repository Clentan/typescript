// Create a Person class with name and age properties. Implement a method to return 
//the person's name.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var john = new Person("Clentan", 23);
console.log(john.name);
var jane = new Person("Chauke", 28);
console.log(jane.name);
