let btns = document.querySelectorAll("button");
let input = document.querySelector("input");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML == "=") {
      input.value = input.value.replace("x", "*");
      input.value = eval(input.value);
    } else if (btn.innerHTML == "Bs") {
      let newStr = input.value.slice(0, -1);
      input.value = newStr;
    } else if (btn.innerHTML == "C") {
      input.value = 0;
    } else {
      input.value += btn.innerHTML;
    }
  });
});
