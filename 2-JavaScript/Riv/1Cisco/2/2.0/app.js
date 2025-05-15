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

// const  greeting  =  "Hello!";
// greeting  =  "Hi!";  //  ->  Uncaught  TypeError:  Assignment  to  constant  variable.

//2.0.8 Scope...........................................................................
// let  counter;
// console.log(counter);  //  ->  undefined
// {
//          counter  =  1;
//          console.log(counter);  //  ->  1
// }
// counter  =  counter  +  1;
// console.log(counter);  //  ->  2

// let  counter;
// console.log(counter);  //  ->  undefined
// {
//         let counter  =  1;
//          {
//                  console.log(counter);  //  ->  1
//          }
// }
// counter  =  counter  +  1;
// console.log(counter);  //  ->  2

// let  height  =  180;
// {
//          let  weight  =  70;
//          console.log(height);  //  ->  180
//          console.log(weight);  //  ->  70	
// }
// console.log(height);  //  ->  180
// console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

// let  height  =  200;
// {
//          let  weight  =  100;
//          {
//                  let  info  =  "tall";
//                  console.log(height);  //  ->  200
//                  console.log(weight);  //  ->  100
//                  console.log(info);  //  ->  tall
//          }
//          console.log(height);  //  ->  200
//          console.log(weight);  //  ->  100
//          console.log(info);  //  ->  Uncaught  ReferenceError:  info  is  not  defined
//    }

// var  height  =  180;
// {
//          var  weight  =  70;
//          console.log(height);  //  ->  180
//          console.log(weight);  //  ->  70	
// }
// console.log(height);  //  ->  180
// console.log(weight);  //  ->  70

//2.0.9 A brief word about functions.........................................
// function  testFunction()  {
//          console.log("Hello");
//          console.log("World");
// }

// console.log("let's  begin:");  //  ->  let's  begin:
// console.log("Hello");  //  ->  Hello
// console.log("World");  //  ->  World
// console.log("and  again:");  //  ->  and  again:
// console.log("Hello");  //  ->  Hello
// console.log("World");  //  ->  World
// console.log("and  once  more:");  //  ->  and  once  more:
// console.log("Hello");  //  ->  Hello
// console.log("World");  //  ->  World

//2.0.10 The var keyword - continued............................................
// var  globalGreeting  =  "Good  ";
   
// function  testFunction()  {
//          var  localGreeting  =  "Morning  ";    
//          console.log("function:");
//          console.log(globalGreeting);
//          console.log(localGreeting);
// }
   
// testFunction();
   
// console.log("main  program:");
// console.log(globalGreeting);
// console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined

//2.0.11 Variable shadowing.........................................................
// let  counter  =  100;
// console.log(counter);  //  ->  100
// {
//        counter  =  200;
//        console.log(counter);  //  ->  200
// }
// console.log(counter);  //  ->  200

// let  counter  =  100;
// console.log(counter);  //  ->  100
// {
//      let  counter  =  200;
//      console.log(counter);  //  ->  200
// }
// console.log(counter);  //  ->  100

//2.0.12 Hoisting...................................................................
// var  height  =  180;
// console.log(height);    //  ->  180
// console.log(weight);    //  ->  Uncaught  ReferenceError:  weight  is  not  defined

var  height  =  180;
console.log(height);    //  ->  180
console.log(weight);    //  ->  undefined
var  weight  =  70;
console.log(weight);    //  ->  70
