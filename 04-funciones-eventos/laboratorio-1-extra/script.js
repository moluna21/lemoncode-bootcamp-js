const inputValues = {
  valueA: 0,
  valueB: 0,
};

var getInputValue = () => parseInt(document.getElementById("input-value").value);

var multiplyValues = (valueA, valueB) => valueA * valueB;
var divideValues = (valueA, valueB) => valueA / valueB;
var sumValues = (valueA, valueB) => valueA + valueB;
var restValues = (valueA, valueB) => valueA - valueB;

var getFirstValue = inputValues.valueA;
var getSecondValue = inputValues.valueB

var setResult = (result) => {
  document.getElementById("print-result").innerHTML = result;
}

document.getElementById("button-multiply").addEventListener("click", function() {
  getFirstValue = getInputValue();

  document.getElementById("button-result").addEventListener("click", function() {
    getSecondValue = getInputValue();

    setResult(multiplyValues(getFirstValue, getSecondValue));
  });
});

document.getElementById("button-divide").addEventListener("click", function() {
  getFirstValue = getInputValue();

  document.getElementById("button-result").addEventListener("click", function() {
    getSecondValue = getInputValue();

    setResult(divideValues(getFirstValue, getSecondValue));
  });
});

document.getElementById("button-sum").addEventListener("click", function() {
  getFirstValue = getInputValue();

  document.getElementById("button-result").addEventListener("click", function() {
    getSecondValue = getInputValue();

    setResult(sumValues(getFirstValue, getSecondValue));
  });
});

document.getElementById("button-rest").addEventListener("click", function() {
  getFirstValue = getInputValue();

  document.getElementById("button-result").addEventListener("click", function() {
    getSecondValue = getInputValue();
    
    setResult(restValues(getFirstValue, getSecondValue));
  });
});
