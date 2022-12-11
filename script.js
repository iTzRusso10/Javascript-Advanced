class Person {
  
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
 
 set age(val){
   if(val < 0){
    this._age = 1;
   }else if (val > 60){
    this._age = 60;
   }else{
    this._age = age;
   }
 }

set firstName(name){
  if(typeof(name) === "number"){
    this._firstName = "Name Invalid";
  }else{
    this._firstName = name;
  }
}


    get fullName(){
    return this.firstName + " " + this.lastName;
    }  
}
    
let mario = new Person( 2 , 'Rossi', 61);
console.log(mario);


    