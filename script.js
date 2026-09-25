let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equal');
const clearButton = document.querySelector('#clear');
const backspaceButton = document.querySelector('#backspace');
const decimalButton = document.querySelector('#decimal');

function add(firstNumber, secondNumber) {
    return parseFloat(firstNumber) + parseFloat(secondNumber);
}
function subtract(firstNumber, secondNumber) {
    return parseFloat(firstNumber) - parseFloat(secondNumber);
}
function multiply(firstNumber, secondNumber) {
    return parseFloat(firstNumber) * parseFloat(secondNumber);
}
function divide(firstNumber, secondNumber) {
    if (parseFloat(secondNumber) === 0) {
        alert("Cannot divide by zero");
        return null;
    }
    return parseFloat(firstNumber) / parseFloat(secondNumber);
}

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            return null;
    }
}

function appendNumber(number) {
    if (display.textContent === '0' || shouldResetDisplay) {
        display.textContent = number;
        shouldResetDisplay = false;
    } else {
        display.textContent += number;
    }
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
});

function setOperator(operator) {
    if (currentOperator !== null && !shouldResetDisplay) {
        secondNumber = display.textContent;
        let result = operate(currentOperator, firstNumber, secondNumber);

        result = Math.round(result * 1000) / 1000;
        display.textContent = result;
        firstNumber = result;
    } else {
        firstNumber = display.textContent;
    }

    currentOperator = operator;
    shouldResetDisplay = true;
}

operators.forEach((button) => {
    button.addEventListener('click', () => {
        setOperator(button.textContent);
    });
});

function evaluate() {
    if (currentOperator === null || shouldResetDisplay) return;
    if (currentOperator === '/' && display.textContent === '0') {
        alert("Cannot divide by zero");
        display.textContent = '0';
        currentOperator = null;
        shouldResetDisplay = true;
        return;
    }

    secondNumber = display.textContent;
    let result = operate(currentOperator, firstNumber, secondNumber);
    result = Math.round(result * 1000) / 1000;
    display.textContent = result;
    firstNumber = result;
    currentOperator = null;
    shouldResetDisplay = true;
}
equalButton.addEventListener('click', evaluate);

function clear() {
    display.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
    shouldResetDisplay = false;
}
clearButton.addEventListener('click', clear);

function deleteDigit() {
    if (shouldResetDisplay) return;
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '' || display.textContent === '-') {
        display.textContent = '0';
    }
}
backspaceButton.addEventListener('click', deleteDigit);

function appendDecimal() {
    if (shouldResetDisplay) {
        display.textContent = '0.';
        shouldResetDisplay = false;
        return;
    }
    if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
}
decimalButton.addEventListener('click', appendDecimal);