let result = document.getElementById('result');
let expression = '';

function addNumber(num) {
  expression += num;
  result.value = expression;
}

function addOperator(op) {
  expression += ' ' + op + ' ';
  result.value = expression;
}

function addDecimal() {
  if (!expression.includes('.')) {
    expression += '.';
    result.value = expression;
  }
}

function clearScreen() {
  expression = '';
  result.value = expression;
}

function calculate() {
  expression = eval(expression);
  result.value = expression;
}
