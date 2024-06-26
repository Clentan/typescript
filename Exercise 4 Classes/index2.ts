class Person {
    constructor(
      public name: string,
      private _age: number,
      private _socialSecurityNumber: string
    ) {}
  
    get age(): number {
      return this._age;
    }
  
    get socialSecurityNumber(): string {
      return this._socialSecurityNumber;
    }
  }
  
  const person = new Person("Jane Doe", 42, "987");
  console.log(person.name); 
  console.log(person.age); 
  console.log(person.socialSecurityNumber); 
  person.name = "John Doe"; 
  person.age = 50; 
  person.socialSecurityNumber = "123"; 