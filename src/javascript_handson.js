/* Comment on JS code. */
//Ayush//
/*Ayush*/
/* Declare JS variable. */
var myName;
/* storing values using assingment operators. */
// Setup
var a;
a = 7;
// Only change code below this line
/* Assigning the Value of One Variable to Another */
// Setup
var a;
a = 7;
var b;
b = a;
// Only change code below this line
/* Initializing Variables with the Assignment Operator */
var a = 9;
/* Declare String Variables*/
var myFirstName = "a";
var myLastName = "s";
/* Understanding Uninitialized Variables */
// Only change code below this line
var a;
var b;
var c;
a = 5;
b = 10;
c = "I am a"
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
/* Understanding Case Sensitivity in Variables */
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
/* Difference b/w var and let. */
let catName = "Oliver";
let catSound = "Meow!";
console.log(catName);
/* Declare a Read-Only Variable with the const Keyword */
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
/* Add two numbers with JS. */
const sum = 20 + 0;
/* Subtract One Number from Another with JavaScript */
const difference = 45 - 33;
/* Multiplication in JS. */
const product = 8 * 10;
/* Division in JS. */
const quotient = 66 / 33;
/* Incrementation in JS. */
let myVar = 87;
// Only change code below this line
myVar++;
/* Decrement in JS. */
let myVar = 11;
// Only change code below this line
myVar--;
/* Decimal in JS */
const myDecimal = 5.7;
// Only change code below this line
/* Multiplication of Decimal in JS. */
const product = 1.0 * 5.0;
/* Division of decimal numbers */
const quotient = 4.4 / 2; // Change this line
/* Finding a remainder in JS. */
const remainder = 11 % 3;
/* Compound Assignment With Augmented Addition */
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;
/* Compound Assignment With Augmented Substraction */
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1 ;
/* Compound Assignment With Augmented Multiply */
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
/* Compound Assignment With Augmented Division. */
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /=12;
b /=4;
c /=11;
/* Escaping literal Quotes. */
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
/* Quoting Strings with Single Quotes */
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
/* Escape Sequences in Strings */
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
/* Concatenating Strings with Plus Operator */
const myStr =  "This is the start. " + "This is the end."; // Change this line
/* Concatenating Strings with the Plus Equals Operator */
let myStr="This is the first sentence. ";
myStr+="This is the second sentence.";
/* Constructing Strings with Variables */
// Only change code below this line
const myName = "Ayush";
const myStr = "Hello, myName " + myName + ", how are you";
/* Appending variables to string. */
// Change code below this line
const someAdjective = "Success";
let myStr = "Learning to code is ";
myStr += someAdjective;
/* Find the Length of a String */
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
/* Use Bracket Notation to Find the First Character in a String */
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
/* Understand String Immutability */
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
/* Use Bracket Notation to Find the Nth Character in a String */
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
/*Use Bracket Notation to Find the Last Character in a String  */
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
/* Use Bracket Notation to Find the Nth-to-Last Character in a String */
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length -2]; // Change this line
/* Word Blank */
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks =  "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line
/* storing multiple values in array using JS */
// Only change code below this line
const myArray = ["Apple" , 45];
/* Storing multiple array using JS */
// Only change code below this line
const myArray = [[], []];
/* Access Array Data with Indexes */
const myArray = [50, 60, 70];
myArray[0];
const myData=myArray[0];
/* Modify Array Data With Indexes */
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0]=45;
/* Access Multi-Dimensional Arrays With Indexes */
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
/* Manuplate Array with push() */
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
/* Manupulate array with pop. */
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();
/* Manupulate array with Shift(). */]
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
/* Manipulate Arrays With unshift() */
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift(); //["John", 23]

// Only change code below this line
myArray.unshift(["Paul", 35]); //["Paul", 35].
/* Shopping list */
const myList = [
    ["Paul" , 5],
    ["Joe", 6],
    ["John", 7],
    ["Angile", 8],
    ["Cyber", 9]
    ];
/* Write Reusable JavaScript with Functions */
function reusableFunction(){
    console.log("Hi World");
 } 
 reusableFunction();
 /* Passing Values to Functions with Arguments */
 function functionWithArgs(o, t){
    console.log(o + t);
  }
  functionWithArgs(1,2);
  /* Return a Value from a Function with Return */
  function timesFive(a){
    return 5*a;
  }
  timesFive(5);
  /* Global Scope and Func. */
  // Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
/* Local Scope and Functions */
function myLocalScope() {
    // Only change code below this line
  var myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
  /* Global vs. Local Scope in Functions */
  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear="sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
/* Understanding Undefined Value returned from a Function */
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}

// Only change code above this line
addThree();
addFive();
/* Assignment with a Returned Value */
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed=processArg(7)
// Only change code below this line
/* stand in line */
function nextInLine(arr, item) {
    // Only change code below this line
     arr.push(item);
    var removed = arr.shift();
    return removed; // Change this line
    return item;
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  /* Understanding Boolean vlaues. */
  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }
  /* Use Conditional Logic with If Statements */
  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
  
    // Only change code above this line.
  }
  /* Comparison with the Equality Operator */
  // Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  testEqual(10);
  /* Comparison with the Strict Equality Operator */
  // Setup
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  /* Practice comparing different values */
  // Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  /* Comparison with the Inequality Operator */
  // Setup
function testNotEqual(val) {
    if (val!=99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);
  /* Comparison with the Strict Inequality Operator */
  // Setup
function testStrictNotEqual(val) {
    if (val !==17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  /* Comparison with the Greater Than Operator */
  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);
/* Comparison with the Greater Than Or Equal To Operator */
function testGreaterOrEqual(val) {
    if (val >=20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);
/* Comparison with the Less Than Operator */
function testLessThan(val) {
    if (val<25) {  // Change this line
      return "Under 25";
    }
  
    if (val<55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
/* Comparison with the Less Than Or Equal To Operator */
function testLessOrEqual(val) {
    if (val <=12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val<=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);
/* Comparisons with the Logical And Operator */
function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
        return "Yes";
      }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);
/*Comparisons with the Logical Or Operator*/
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val>20||val<10) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
/* Introducing Else Statements */
function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  // Change this value to test
  testElse(4);
 /* Introducing Else If Statements */ 
 function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if(val < 5) {
      return "Smaller than 5";
    }
  else{
    return "Between 5 and 10";
  }
  }
  testElseIf(7);
  /* Logical Order in If Else Statements
 */
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
  /* chaining if-else statement  */
  function testSize(num) {
    // Only change code below this line
    if (num < 5) {
      return "Tiny";
    } else if (num < 10) {
      return "Small";
    } else if (num < 15) {
      return "Medium";
    } else if (num < 20) {
      return "Large";
    } else {
      return "Huge";
    }
    // Only change code above this line
  }
  
  









