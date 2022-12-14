// The destructuring returns undefined for the properties: name, surname and old. 
//Try to fix the code without changing the name's properties of the object person.

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, firstName, lastName, age } = person;

console.log(id, firstName, lastName, age);

