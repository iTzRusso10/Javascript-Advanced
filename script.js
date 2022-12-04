const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  }
let keys = Object.keys(person).length;
let mario= Object.keys(person);
let values = Object.values(person);

 for (let i = 0; i < keys; i++){
    console.log(mario[i] +": "+ values[i]);
 }

for (let key in person){
 let value= person[key];
console.log( key +" "+ value)
}