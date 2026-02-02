const billInput = document.querySelector(".bill-input");
const tipBtn = document.querySelectorAll(".btn");
const tipInput = document.querySelector(".input-tip");
billInput.addEventListener;
const numberOfPeopleInput = document.querySelector(".number-of-people-input");
const tipAmountValue = document.querySelector(".tip-per-person");
const totalValue = document.querySelector(".total-per-person");
const resetBtn = document.querySelector(".button");
let tipValue = null;

billInput.addEventListener("input", () => {
  calculate();
});

tipBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipBtn.forEach((b) => {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    tipValue = btn.dataset.tip;
    calculate();
  });
});

tipInput.addEventListener("input", () => {
  tipBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  tipValue = tipInput.value;
  calculate();
});

numberOfPeopleInput.addEventListener("input", () => {
  calculate();
});

function calculate() {
  const bill = Number(billInput.value);
  const tip = Number(tipValue);
  const numberOfPeople = Number(numberOfPeopleInput.value);
  const realTipValue = bill * (tip / 100);
  const realPerPersonValue = Number(realTipValue) / numberOfPeople;
  const realTotalPerPerson = bill / numberOfPeople + realPerPersonValue;
  if (!bill || !tip || !numberOfPeople) return;
  tipAmountValue.textContent = realPerPersonValue.toFixed(2);
  totalValue.textContent = realTotalPerPerson.toFixed(2);
}
resetBtn.addEventListener("click", () => {
  billInput.value = "";
  tipInput.value = "";
  numberOfPeopleInput.value = "";
  tipBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  tipValue = null;
  tipAmountValue.textContent = "$0,00";
  totalValue.textContent = "$0,00";
});
