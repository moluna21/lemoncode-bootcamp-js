document.getElementById("name").value = "Daenerys";
document.getElementById("lastName").value = "Targaryen";

function send() {
  return [
    console.log(document.getElementById("name").value + " " + document.getElementById("lastName").value)
  ]
}

// Texto con interporlación
console.log("%cDatos del formulario", "color: #05affe; font-weight: bold;")