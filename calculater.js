/* 
Task:

Simple Calculation :
    - Sum
    - Multiplication
    - Devision
    - Subtraction

- You will define your operants as a different file and export them to main file!

- Output will be like screnshot!

*/

var firstOperand = +process.argv[2]
var secondOperand = +process.argv[3]

// process.argv[0] = node JS itselves
// process.argv[1] = 1 is always your script name
// process.argv[2] = everything afterwards are arguments supplied on command line!


// -----------------------------------

// moment Package from NPM:

// To define easy time and date

moment().format("dddd, MMMM Do YY, h:mm:ss a")