
const display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value === '') return;
  const lastChar = display.value[display.value.length - 1];
  if (['+', '-', '*', '/'].includes(lastChar)) return;
  display.value += operator;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}















