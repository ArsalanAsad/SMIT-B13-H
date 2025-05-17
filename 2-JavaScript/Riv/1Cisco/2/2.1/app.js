//2.1.1 Data types and type conversions..............................
// let  year  =  1990;
// console.log(year);  //  ->  1990
// console.log(1991);  //  ->  1991
// console.log("Alice");  //  ->  Alice

//2.1.2 The typeof operator..........................................
// All possible return values of the typeof operator are:
// "undefined"
// "object"
// "boolean"
// "number"
// "bigint"
// "string"
// "symbol"
// "function"

// let  year  =  1990;
// console.log(typeof  year);  //  ->  number
// console.log(typeof  1991);  //  ->  number
   
// let  name  =  "Alice";
// console.log(typeof  name);  //  ->  string
// console.log(typeof  "Bob");  //  ->  string
   
// let  typeOfYear  =  typeof  year;
// console.log(typeOfYear);  //  ->  number
// console.log(typeof  typeOfYear);  //  ->  string

//2.1.3 Primitive data types..............................................
//Boolean..........
// let  isDataValid  =  true;
// let  isStringTooLong  =  false;
// let  isGameOver  =  false;
// continueLoop  =  true;
   
// console.log(false);  //  ->  false
// console.log(typeof  false);  //  ->  boolean
// console.log(isDataValid);  //  ->  true
// console.log(typeof  isDataValid);  //  ->  boolean

//Number...................
// const  year  =  1991;
// let  delayInSeconds  =  0.00016;
// let  area  =  (16  *  3.14);
// let  halfArea  =  area  /  2;
   
// console.log(year);  //  ->  1991;
// console.log(typeof  year);  //  ->  number;

// let  a  =  10;  //  decimal  -  default  
// let  b  =  0x10;  //  hexadecimal  
// let  c  =  0o10;  //  octal  
// let  d  =  0b10;  //  binary  
   
// console.log(a);  //  ->  10  
// console.log(b);  //  ->  16  
// console.log(c);  //  ->  8  
// console.log(d);  //  ->  2  
   
// let  x  =  9e3;
// let  y  =  123e-5;
// console.log(x);  //  ->  9000
// console.log(y);  //  ->  0.00123

// let  a  =  1  /  0;
// let  b  =  -Infinity;
   
// console.log(a);  //  ->  Infinity
// console.log(b);  //  ->  -Infinity
// console.log(typeof  a);  //  ->  number
// console.log(typeof  b);  //  ->  number
   
// let  s  =  "it's  definitely  not  a  number";
// let  n  =  s  *  10;
// console.log(n);  //  ->  NaN
// console.log(typeof  n);  //  ->  number

//BigInt..................
// let  big  =  1234567890000000000000n;
// let  big2  =  1n;
   
// console.log(big);  //  ->  1234567890000000000000n
// console.log(typeof  big);  //  ->  bigint
   
// console.log(big2);  //  ->  1n
// console.log(7n  /  4n);  //  ->  1n

// let  big3  =  1000n  +  20;
//  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions

// let  big4  =  1000n  /  0n;  //  ->  Uncaught  RangeError:  Division  by  zero

//String...................
// let  country  =  "Malawi";
// let  continent  =  'Africa';
   
// console.log(country);  //  ->  Malawi
// console.log(typeof  country);  //  ->  string
// console.log(continent);  //  ->  Africa
// console.log(typeof  continent);  //  ->  string

// let  message1  =  "The  vessel  'Mars'  called  at  the  port.";
// let  message2  =  'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';
   
// console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
// console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.

// let  message1  =  'The  vessel  \'Mars\'  called  at  the  port.';
// let  message2  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
   
// console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
// console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
   
// let  path  =  "C:\\Windows";
// console.log(path);  //  ->  C:\Windows

// let  path  =  "C:\\Windows"  -  "Windows";
// console.log(path);  //  ->  NaN
   
// let  test  =  "100"  -  "10";
// console.log(test);  //  ->  90
// console.log(typeof  test);  //  ->  number

// let  path  =  "C:\\"  +  "Windows";
// console.log(path);  //  ->  C:\Windows
   
// let  test  =  "100"  +  "10";
// console.log(test);  //  ->  10010
// console.log(typeof  test);  //  ->  string

// let  country  =  "Malawi";
// let  continent  =  "Africa";
   
// let  sentence  =  `  ${country}  is  located  in  ${continent}.`;
// console.log(sentence);  //  ->  Malawi  is  located  in  Africa.

// console.time();
// console.log("test  console");  //  ->  test  console
// console.timeEnd();  //  ->  default:  0.108154296875  ms

// let  river  =  "Mekong";
// let  character  =  river.charAt(2);
// console.log(character);  //  ->  k

// let  str  =  "java  script  language";
   
// console.log(str.length);  //  ->  20
// console.log('test'.length);  //  ->  4
   
// console.log(str.charAt(0));  //  ->  'j'
// console.log('abc'.charAt(1));  //  ->  'b'
   
// console.log(str.slice(0,  4));  //  ->  'java'
// console.log('test'.slice(1,  3));  //  ->  'es'
   
// console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
// console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']

//Undefined................................
// let  declaredVar;
// console.log(typeof  declaredVar);  //  ->  undefined
   
// declaredVar  =  5;
// console.log(typeof  declaredVar);  //  ->  number
   
// declaredVar  =  undefined;
// console.log(typeof  declaredVar);  //  ->  undefined
   
// The  undefined  value  can  also  be  returned  by  the  typeof  operator  when  a  non-existent  variable  is  used  as  an  argument.
   
// Console.log(typeof  notDeclaredVar);  //  ->  undefined
// console.log(notDeclaredVar);  //  ->  Uncaught  ReferenceError:  notDeclared  is  not  defined

//SYMBOL

//NULL
let  someResource;
console.log(someResource);  //  ->  undefined
console.log(typeof  someResource);  //  ->  undefined
   
someResource  =  null;
console.log(someResource);  //  ->  null
console.log(typeof  someResource);  //  ->  object
