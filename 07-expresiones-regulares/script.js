// Módulo 7 - Expresiones Regulares - Laboratorio

// * Validar un IBAN
// ** Caso 1
// Dado este IBAN: ES6600190020961234567890
// Validar que se informa con dos letras, y los números correspondientes.
const patternIBAN = /^[A-Z]{2}\d{22}$/;
const valuesIBAN = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];

console.log(patternIBAN);
valuesIBAN.forEach(value => {
  console.log(`${value} ->`, patternIBAN.test(value));
});


// ** Caso 2
// Vamos a permitir que se incluyan espacios en ciertas áreas,
// daremos por valida estás dos cadenas:
// ES6600190020961234567890
// ES66 0019 0020 9612 3456 7890
const patternIBANWithSpaces = /^[A-Z]{2}\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;

console.log(patternIBANWithSpaces);
valuesIBAN.forEach(value => {
  console.log(`${value} ->`, patternIBANWithSpaces.test(value));
});

// ** Caso 3
// Vamos a extraer el código de páis y el dígito de control.
const patternIBANWithSpacesExtract = /^([A-Z]{2}\d{2})\s?(\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4})$/;

console.log(patternIBANWithSpacesExtract);
valuesIBAN.forEach(value => {
  console.log(`${value} ->`, patternIBANWithSpacesExtract.exec(value));
});



// * Validar matrícula coche
// ** Caso 1
// Vamos a validar una matrícula de coche moderna,
// esta compuesta por 4 digitos y tres letras, patrones a validar:
const patternRegistration = /^\d{4}(\s|-|\S)?[A-Z]{3}$/;
const valuesRegistration = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];

console.log(patternRegistration);
valuesRegistration.forEach(value => {
  console.log(`Coincide "${patternRegistration}", con "${value}"? ->`, patternRegistration.test(value));
});


// Caso 2
// Vamos a extraer por un lado la parte numérica y por otro las letras.
const patternRegistrationExtract = /^(\d{4})(\s|-)?([A-Z]{3})$/;

console.log(patternRegistrationExtract);
valuesRegistration.forEach(value => {
  console.log(`RegEx matchs with "${value}"? ->`, patternRegistrationExtract.exec(value));
});
