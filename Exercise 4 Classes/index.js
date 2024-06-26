//Create a Person class with name and age properties. Implement a method to return 
//the person's name.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("John Doe", 35);
console.log(person.getName());
console.log(person.age);
