let currentInput = '';
let previousInput = '';
let operation = undefined;

const calculatorScreen = document.getElementById('calculator-screen');

function appendNumber(number) {
    currentInput = currentInput.toString() + number.toString();
    updateScreen();
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateScreen();
    }
}

function chooseOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        compute();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function compute() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    currentInput = result;
    operation = undefined;
    previousInput = '';
    updateScreen();
}

function clearScreen() {
    currentInput = '';
    previousInput = '';
    operation = undefined;
    updateScreen();
}

function deleteNumber() {
    currentInput = currentInput.toString().slice(0, -1);
    updateScreen();
}

function updateScreen() {
    calculatorScreen.value = currentInput;
}
