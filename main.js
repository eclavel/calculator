const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equal = document.querySelector("#equal");
var displayNumber1 = "";
var displayNumber2 = "";
var operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.innerHTML === "+" ||
      button.innerHTML === "-" ||
      button.innerHTML === "x" ||
      button.innerHTML === "/"
    ) {
      operator = button.innerHTML;
    } else if (button.innerHTML === "C") {
      displayNumber1 = "";
      displayNumber2 = "";
      operator = "";
      display.innerHTML = "0";
    } else if (button.innerHTML === "=") {
      operate(operator, Number(displayNumber1), Number(displayNumber2));
    } else if (display.innerHTML.length < 12) {
      if (displayNumber1 === "" || operator === "") {
        displayNumber1 += button.innerHTML;
        display.innerHTML = displayNumber1;
      } else {
        displayNumber2 += button.innerHTML;
        display.innerHTML = displayNumber2;
      }
    } else {
      display.innerHTML = "ERROR";
      displayNumber1 = "";
      displayNumber2 = "";
      operator = "";
    }
  });
});

function operate(operator, num1, num2) {
  if (operator === "+") {
    display.innerHTML = add(num1, num2);
  } else if (operator === "-") {
    display.innerHTML = subtract(num1, num2);
  } else if (operator === "x") {
    display.innerHTML = multiply(num1, num2);
  } else if (operator === "/") {
    display.innerHTML = divide(num1, num2);
  }
  displayNumber1 = display.innerHTML;
  displayNumber2 = "";
  operator = "";
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
