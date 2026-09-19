let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetDisplay = false;



const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace');
const decimalButton = document.querySelector('#decimal');


console.log('Display:', display);
console.log('All Buttons:', buttons);
console.log('Operators:', operators);
console.log('Equal Button:', equalButton);
console.log('Clear Button:', clearButton);
console.log('Backspace Button:', backspaceButton);
console.log('Decimal Button:', decimalButton);

function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    if (b === 0) {
        alert("Cannot divide by zero");
        return null;
    }
    return a / b;
}