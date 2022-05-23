
/* CALCULATOR LOGIC */
function add(a,b) {
    return parseInt(a) + parseInt(b);
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'X':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}


/* BUTTON LOGIC */
function numClick(num) {
    const output = document.querySelector('#output');
    let content = output.textContent;
    if (content == '0' || resetOutput == true) {
        output.textContent = num;
        resetOutput = false;  
        return;
    }
    content += num;
    output.textContent = content;
}

function operatorClick(operator) {
    resetOutput = true;
    const output = document.querySelector('#output');
    if (waitingOperator == undefined) {
        firstNum = output.textContent;
        waitingOperator = operator;
    } else {
        let compute = operate(waitingOperator, firstNum, output.textContent);
        firstNum = compute;
        output.textContent = compute;
        waitingOperator = operator;
    }
}

function equalClick() {
    const output = document.querySelector('#output');
    console.log(`waiting: ${waitingOperator} firstNum: ${firstNum} secondNum: ${output.textContent}`);
    let result = operate(waitingOperator, firstNum, output.textContent);
    console.log(`result: ${result}`);
    output.textContent = result;
    firstNum = result;
    waitingOperator = undefined;
}

/* BUTTON EVENT LISTENERS */
const nums = document.querySelectorAll('.numbers');
nums.forEach((num) => {
    num.addEventListener('click', function() {
        numClick(num.textContent);
    });
});

const clear = document.querySelector('#ac');
clear.addEventListener('click', () => {
    const output = document.querySelector('#output');
    output.textContent = '0';
});

const operators = document.querySelectorAll('.operators');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        operatorClick(operator.textContent);
    });
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    equalClick();
});

let firstNum = 0;
let waitingOperator = undefined;
let resetOutput = false;
