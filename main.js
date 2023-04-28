const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
let displayNumber1 = '';
let displayNumber2 = '';
let operator = '';

buttons.forEach((button) => {
  button.addEventListener('mouseup', () => {
    if (
      button.innerHTML === '+'
      || button.innerHTML === '-'
      || button.innerHTML === 'x'
      || button.innerHTML === '/'
    ) {
      button.style.backgroundColor = '#66b3ff';
    } else if (button.innerHTML === 'C') {
      button.style.backgroundColor = '#ff6666';
    } else if (button.innerHTML === '=') {
      button.style.backgroundColor = 'aquamarine';
    } else if (display.innerHTML.length < 12) {
      button.style.backgroundColor = '#fff';
    }
  });
  button.addEventListener('mousedown', () => {
    if (
      button.innerHTML === '+'
      || button.innerHTML === '-'
      || button.innerHTML === 'x'
      || button.innerHTML === '/'
    ) {
      button.style.backgroundColor = 'red';
      if (displayNumber1 !== '' && displayNumber2 !== '' && operator !== '') {
        operate(operator, Number(displayNumber1), Number(displayNumber2));
      }
      operator = button.innerHTML;
    } else if (button.innerHTML === 'C') {
      button.style.backgroundColor = 'green';
      displayNumber1 = '';
      displayNumber2 = '';
      operator = '';
      display.innerHTML = '0';
    } else if (button.innerHTML === '=') {
      button.style.backgroundColor = 'red';
      operate(operator, Number(displayNumber1), Number(displayNumber2));
    } else if (display.innerHTML.length < 12) {
      button.style.backgroundColor = 'red';
      if (displayNumber1 === '' || operator === '') {
        displayNumber1 += button.innerHTML;
        display.innerHTML = displayNumber1;
      } else {
        displayNumber2 += button.innerHTML;
        display.innerHTML = displayNumber2;
      }
    } else {
      display.innerHTML = 'ERROR';
      displayNumber1 = '';
      displayNumber2 = '';
      operator = '';
    }
  });
});

function operate(operator, num1, num2) {
  if (operator === '+') {
    display.innerHTML = add(num1, num2);
  } else if (operator === '-') {
    display.innerHTML = subtract(num1, num2);
  } else if (operator === 'x') {
    display.innerHTML = multiply(num1, num2);
  } else if (operator === '/') {
    if (num2 === 0) {
      display.innerHTML = `ERROR: num/${num2}`;
    } else {
      display.innerHTML = divide(num1, num2);
    }
  }
  displayNumber1 = display.innerHTML;
  displayNumber2 = '';
  operator = '';
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
