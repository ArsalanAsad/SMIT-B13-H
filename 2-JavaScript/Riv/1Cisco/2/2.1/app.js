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
// let  someResource;
// console.log(someResource);  //  ->  undefined
// console.log(typeof  someResource);  //  ->  undefined
   
// someResource  =  null;
// console.log(someResource);  //  ->  null
// console.log(typeof  someResource);  //  ->  object

//2.1.4 Type conversions.....................................
// const  str  =  String();
// const  num  =  Number();
// const  bool  =  Boolean();
   
// console.log(str);  //  ->
// console.log(num);  //  ->  0
// console.log(bool);  //  ->  false
   
// const  big1  =  BigInt(42);
// console.log(big1);  //  ->  42n
   
// const  big2  =  BigInt();      //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt

//2.1.5 Conversions............................................
// const num  =  42;
   
// const  strFromNum1  =  String(num);
// console.log(strFromNum1, typeof strFromNum1)
// const  strFromNum2  =  String(8);
// console.log(strFromNum2, typeof strFromNum2)
// const  strFromBool  =  String(true);
// console.log(strFromBool, typeof strFromBool)
// const  numFromStr  =  Number("312");
// console.log(numFromStr, typeof numFromStr)
// const  boolFromNumber  =  Boolean(0);
// console.log(boolFromNumber, typeof boolFromNumber)

//2.1.6 Conversion to String....................................
// let  str  =  "text";
// let  strStr  =  String(str);
// console.log(`${typeof  str}  :  ${str}`);  //  ->  string  :  text
// console.log(`${typeof  strStr}  :  ${strStr}`);  //  ->  string  :  text
   
// let  nr  =  42;
// let  strNr  =  String(nr);
// console.log(`${typeof  nr}  :  ${nr}`);  //  ->  number  :  42
// console.log(`${typeof  strNr}  :  ${strNr}`);  //  ->  string  :  42
   
// let  bl  =  true;
// let  strBl  =  String(bl);
// console.log(`${typeof  bl}  :  ${bl}`);  //  ->  boolean  :  true
// console.log(`${typeof  strBl}  :  ${strBl}`);  //  ->  string  :  true
   
// let  bnr  =  123n;
// let  strBnr  =  String(bnr);
// console.log(`${typeof  bnr}  :  ${bnr}`);  //  ->  bigint  :  123
// console.log(`${typeof  strBnr}  :  ${strBnr}`);  //  ->  string  :  123
   
// let  un  =  undefined;
// let  strUn  =  String(un);
// console.log(`${typeof  un}  :  ${un}`);  //  ->  undefined  :  undefined
// console.log(`${typeof  strUn}  :  ${strUn}`);  //  ->  string  :  undefined
   
// let  n  =  null;
// let  strN  =  String(n);
// console.log(`${typeof  n}  :  ${n}`);  //  ->  object  :  null
// console.log(`${typeof  strN}  :  ${strN}`);  //  ->  string  :  null

//2.1.7 Conversion to Number........................................
// let nr = 42

// console.log(Number(42));  //  ->  42
   
// console.log(Number("11"));  //  ->  11
// console.log(Number("0x11"));  //  ->  17
// console.log(Number("0o11"));  //  ->  9
// console.log(Number("0b11"));  //  ->  3
// console.log(Number("12e3"));  //    ->  12000
// console.log(Number("Infinity"));//  ->  Infinity
// console.log(Number("text"));  //  ->  NaN
   
// console.log(Number(14n));  //  ->  14
// console.log(Number(123456789123456789123n));  //  -  >    123456789123
// 456800000
   
// console.log(Number(true));  //  ->  1
// console.log(Number(false));  //  ->  0
   
// console.log(Number(undefined));  //    ->  NaN
   
// console.log(Number(null));//  ->  0

//2.1.8 Conversion to Boolean.............................................
// console.log(Boolean(true));  //  ->  true
   
// console.log(Boolean(42));  //  ->  true
// console.log(Boolean(0));  //  ->  false
// console.log(Boolean(NaN));  //  ->  false
   
// console.log(Boolean("text"));  //  ->  true
// console.log(Boolean(""));  //  ->  false
   
// console.log(Boolean(undefined));  //  ->  false
   
// console.log(Boolean(null));  //  ->  false

//2.1.9 Conversion to BigInt..........................................
// console.log(BigInt(11));  //  ->  11n
// console.log(BigInt(0x11));  //  ->  17n
// console.log(BigInt(11e2));  //  ->  1100n
   
// console.log(BigInt(true));  //  ->  1n
   
// console.log(BigInt("11"));  //  ->  11n
// console.log(BigInt("0x11"));  //  ->  17n
   
// console.log(BigInt(null));  //  ->  Uncaught  TypeError:  Cannot  convert  null  to  a  BigInt
   
// console.log(BigInt(undefined));  //  ->  Uncaught  TypeError:  Cannot  convert  undefined  to  a  BigInt
   
// console.log(BigInt(NaN));  //  ->  Uncaught  RangeError:  The  number  NaN  cannot  be  converted  to  a  BigInt  because  it  is  not  an  integer

//2.1.10 Implicit Conversions..............................................
// const  str1  =  42  +  "1";
// console.log(str1);                //  ->  421
// console.log(typeof  str1);  //  ->  string
   
// const  str2  =  42  -  "1";
// console.log(str2);                //  ->  41
// console.log(typeof  str2);  //  ->  number
