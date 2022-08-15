var getFirstValue = () => parseInt(document.getElementById("input-first-value").value);
var getSecondValue = () => parseInt(document.getElementById("input-second-value").value);

var multiplyValues = () => getFirstValue() * getSecondValue(); 
var divideValues = () => getFirstValue() / getSecondValue();
var sumValues = () => getFirstValue() + getSecondValue();
var restValues = () => getFirstValue() - getSecondValue();

var setResult = (result) => {
  isNaN(getFirstValue()) || isNaN(getSecondValue()) ? document.getElementById("print-result").innerHTML = 'Error' : document.getElementById("print-result").innerHTML = result;
}

document.getElementById("button-multiply").addEventListener("click", function() {
  setResult(multiplyValues())
});
document.getElementById("button-divide").addEventListener("click", function() {
  setResult(divideValues())
});
document.getElementById("button-sum").addEventListener("click", function() {
  setResult(sumValues())
});
document.getElementById("button-rest").addEventListener("click", function() {
  setResult(restValues())
});
