var getFirstValue = () => parseInt(document.getElementById("input-first-value").value);
var getSecondValue = () => parseInt(document.getElementById("input-second-value").value);

var multiplyValues = () => getFirstValue() * getSecondValue(); 
var divideValues = () => getFirstValue() / getSecondValue();
var sumValues = () => getFirstValue() + getSecondValue();
var restValues = () => getFirstValue() - getSecondValue();

// isNan -> es una función que lo que hace es comprobar si es un nº
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


// SUMAS en JS
// Si los 2 números vienen recogidos por las variables X e Y,
// al poner x+y lo que hará es concatenar sus valores.
// Si los valores son x=2, y=3, el resultado de sumar x+y no será 5,
// será 23, ya que concatena. Para evitar ese problema se ha de usar:
// parseInt:  si se trata de números enteros
// parseFloat: si se trata de números con decimales
// En este caso para sumar x=2, y=3 usaremos la siguiente expresión.
//    parseInt(x)+parseInt(y)