//Create a Person class with name and age properties. Implement a method to return 
//the person's name.
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    getName(): string {
      return this.name;
    }
  }
  const person = new Person("John Doe", 35);
console.log(person.getName()); 
console.log(person.age); 


