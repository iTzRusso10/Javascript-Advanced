function multiplyByTwo(value) {
    let number = 2;
    function inner(){
      let moltiply =  value * number ;
      console.log(moltiply);
      
    }
    return inner;

  }
   
multiplyByTwo(77)();