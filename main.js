const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const equal = document.querySelector('#equal');

numbers.forEach(number => {
  number.addEventListener('click',e =>{
    display.innerHTML += number.innerHTML;
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () =>{
    console.log(operator.innerHTML);
  });
});

function operate(operator, num1, num2){
  if(operator === '+'){
    console.log(add(num1,num2));
  }
  else if(operator === '-'){
    console.log(subtract(num1,num2));
  }
  else if(operator === 'x'){
    console.log(multiply(num1,num2));
  }
  else if(operator === '/'){
    console.log(divide(num1,num2));
  }
}

function add(num1, num2){
  return num1 + num2;
}

function subtract(num1,num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1*num2;
}

function divide(num1, num2){
  return num1 / num2;
}



