let errorSymbolSal = document.getElementById("errorSymbolSal");
let errorSymbolInc = document.getElementById("errorSymbolInc");
let errorSymbolDed = document.getElementById("errorSymbolDed");
let salary = document.getElementById("salary");
let extra = document.getElementById("extra");
let age = document.getElementById("age");
let ageError = document.getElementById("ageError");
let deductions = document.getElementById("deductions");
let btn = document.getElementById("btn");
let taxContainer = document.getElementById("taxContainer");
let income = document.getElementById("income");
let closeBtn = document.getElementById("income");

function clearElements() {
  errorSymbolSal.style.display = "none";
  errorSymbolInc.style.display = "none";
  errorSymbolDed.style.display = "none";
  ageError.style.display = "none";
}

clearElements();
// console.log(errorSymbolSal);

function handleInput(inputField, errorSymbol) {
  inputField.oninput = (e) => {
    const currValue = e.target.value;
    if (isNaN(currValue) || currValue < 0) {
      errorSymbol.style.display = "unset";
    } else {
      errorSymbol.style.display = "none";
    }
    inputField.value = currValue;
    console.log(inputField.value);
  };
}

handleInput(salary, errorSymbolSal);
handleInput(extra, errorSymbolInc);
handleInput(deductions, errorSymbolDed);

function closeElement() {
  console.log("clicked");
  taxContainer.style.display = "none";
  salary.value = "";
  extra.value = "";
  deductions.value = "";
  age.value = "empty";
}

function calculateTotalIncome(salary, extra, deductions, ageValue) {
  const totalIncome = salary + extra - deductions;
  if (totalIncome <= 800000) {
    income.innerText = totalIncome;
  }

  if (ageValue === "lessThan40") {
    income.innerText = totalIncome * 0.3;
  }

  if (ageValue === "40and59") {
    income.innerText = totalIncome * 0.4;
  }

  if (ageValue === "greaterThan60") {
    income.innerText = totalIncome * 0.1;
  }

  console.log(totalIncome);
}

function calculateIncome(e) {
  e.preventDefault();
  const ageValue = age.value;
  if (ageValue === "empty") {
    ageError.style.display = "unset";
    return;
  } else {
    ageError.style.display = "none";
  }
  calculateTotalIncome(
    Number(salary.value),
    Number(extra.value),
    Number(deductions.value),
    ageValue
  );
  taxContainer.style.display = "unset";
}
