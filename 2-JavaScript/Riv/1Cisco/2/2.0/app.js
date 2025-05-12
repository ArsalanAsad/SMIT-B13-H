//2.0.3 Declaring variables.............................................
// var  height;
// console.log(height);  //  ->  undefined
// console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

// let  height;
// console.log(height);  //  ->  undefined

// var  height;
// var  height;
// console.log(height);  //  ->  undefined

// let  height;
// let  height;  //  ->  Uncaught  SyntaxError:  Identifier  'height'  has  already  been  declared
// console.log(height);

//2.0.4 Initializing variables.............................................
// let  height  =  180;
// let  anotherHeight  =  height;
// let  weight;
// console.log(height);  //  ->  180
// console.log(anotherHeight);  //  ->  180
// weight  =  70;    
// console.log(weight);  //  ->  70

// let  height  =  180;
// console.log(height);  //  ->  180
// console.log("height");  //  ->  height

//2.0.5 Declarations and strict mode............................................
// height  =  180;
// console.log(height);  //  ->  180

// "use strict";
   
// height  =  180;  //  ->  Uncaught  ReferenceError:  height  is  not  defined
// console.log(height);

//2.0.6 Changing variable values..................................................
// let  steps  =  100;
// console.log(steps);  //  ->  100
// steps  =  120;  //  ->  120
// console.log(steps);
// steps  =  steps  +  200;
// console.log(steps);  //  ->  320

// let  greeting  =  "Hello!";
// let  counter  =  100;

// console.log(greeting);  //  ->  Hello!
// greeting  =  1;
// console.log(greeting);  //  ->  1

// greeting  =  "Hello!";
// greeting  =  greeting  +  counter;
// console.log(greeting);  //  ->  Hello!100

//2.0.7 Constants.......................................................................
// const  greeting  =  "Hello!";

// const  greeting;  //  ->  Uncaught  SyntaxError:  Missing  initializer  in  const  declaration
// greeting  =  "Hello!";

const  greeting  =  "Hello!";
greeting  =  "Hi!";  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable.
