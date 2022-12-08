class Person {
    
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
    static fromObject(obj) {
        return this.obj = obj
    }
    
    }
    
    const obj = {
    firstName: 'Giuseppe',
    lastName: 'Russo',
    city : "Rossano"
    };
    
    const person = Person.fromObject(obj);
    console.log(person.firstName + " " + person.lastName + " "+ person.city);