let btns = document.querySelectorAll("button");
let input = document.querySelector("input");

function keyPress(value) {
  input.value += value;
}

function calculate() {
  input.value = eval(input.value);
}

document.addEventListener("keypress", (event) => {
  if (event.code == `Digit${event.key}`) {
    keyPress(event.key);
  } else if (event.code == `Digit8`) {
    keyPress(event.key);
  } else if (event.code == `Minus`) {
    keyPress(event.key);
  } else if (event.code == `Equal`) {
    if (event.key == "+") keyPress(event.key);
  } else if (event.code == "Slash") {
    keyPress(event.key);
  } else if (event.code == "Enter") {
    calculate();
  } else {
    console.log(event);
  }
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML == "=") {
      input.value = input.value.replace("x", "*");
      calculate();
    } else if (btn.innerHTML == "Bs") {
      let newStr = input.value.slice(0, -1);
      input.value = newStr;
    } else if (btn.innerHTML == "C") {
      input.value = null;
    } else {
      input.value += btn.innerHTML;
    }
  });
});
