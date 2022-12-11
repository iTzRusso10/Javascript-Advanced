class Square {

    constructor(side) {
    this.side = side;
    }
    }
    
    class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    }
    }
    
    
    
    class Circle {
    constructor(radius) {
    this.radius = radius;
    }
    }
    
    class AreaCalculator {
          static calculate(a){
           if(a == square) {
            return a.side * a.side;
           }else if (a == rectangle) {
            return a.width * a.height;
           }else if ( a == circle){
            return Math.PI*(a.radius * a.radius);
           }
          }
    }
    
    const square = new Square(4);
    const rectangle = new Rectangle(4, 2);
    const circle = new Circle(5);
    

    console.log(AreaCalculator.calculate(square));
    console.log(AreaCalculator.calculate(rectangle));
    console.log(AreaCalculator.calculate(circle));
   
    

  