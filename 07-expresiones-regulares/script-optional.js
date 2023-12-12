// Módulo 7 - Expresiones Regulares - Laboratorio - Opcionales

console.log('OPCIONALES');
// * Extraer imágenes de un fichero HTML
// ** Caso 1
// De una sola linea extraer el contenido de src:
const patternImageSrc = /^<img src="(.{1,}[a-z](\s|_|-|\.|:|\/)?\.[a-z]{3,4})"\s?\/>$/i;
const image = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />';

console.log(`Coincide "${patternImageSrc}", con "${image}"? ->`, patternImageSrc.test(image));
console.log(`${image} ->`, patternImageSrc.exec(image));
console.log('');


// Caso 2
// De un HTML extraer todos los src de todos los objetos img:
const patternAllImagesSrc = /^\s{1,}?<img\s{1,}?src="(.{1,}\.[a-z]{3,4})"\s{1,}?\/>$/gim;
const htmlObject = `
<html>
  <body>
    <img
      src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
    />
    <h1>ejemplo</h1>
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    />
  </body>
</html>
`
console.log(`${htmlObject} ->`, htmlObject.match(patternAllImagesSrc));
console.log('');


// * Validar sintaxis tarjeta de crédito
console.log('Validar sintaxis tarjeta de crédito');
// Datos de su tarjeta:
// - Que una máster card tiene una longitud de 16 caracteres(numeros).
// - Que tiene que empezar con 50, 51, 52, 53, 54, 55.
// - Que lo normal es que se agrupen en conjuntos de 4 digitos.

// ** Caso 1
// Vamos a validar los siguientes formatos
// 5299 64000 000 000
// 5299 - 64000-000-000
// 529964000000000

const patternCreditCard = /^(\d[50-55]\d{2})(\s|-)?(\d{4})(\s|-)?(\d{4})(\s|-)?(\d{4})$/;
const creditCardValues = ['5432 1730 2884 3862', '5432-1730-2884-3862', '5432173028843862'];

creditCardValues.forEach(value => {
  console.log(`Coincide "${patternCreditCard}", con "${value}"? ->`, patternCreditCard.test(value));
});

// Caso 2
console.log('');
console.log('Extraer cada grupo de cuatro digitos');
// Vamos a extraer cada grupo de cuatro digitos.
creditCardValues.forEach(value => {
  console.log(`${value} ->`, patternCreditCard.exec(value));
});
console.log('');



// * Buscar Expresiones regulares
// - Ejercicio 1: Comprobar si una clave es fuerte o no:
//   - Complejo: que tenga al menos los siguiente caracteres: 
//     una minuscula, una mayuscula, un numero y un caracter especial.
//   - Moderado: Que tenga al menos los siguientes caracteres:
//     una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.

const patternPassComplex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/;
const patternPassModerate = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}/;
const passComplex = ['aB0?', '?0Ba', 'aB0', 'aBaBAb0*', 'abCD123?', '?D3c2B1a'];

console.log('Comprobar si una clave es fuerte o no:')
console.log('Contraseña compleja');
passComplex.forEach(value => {
  console.log(`Coincide "${patternPassComplex}", con "${value}"? ->`, patternPassComplex.test(value));
});

console.log('Contraseña moderada');
passComplex.forEach(value => {
  console.log(`Coincide "${patternPassModerate}", con "${value}"? ->`, patternPassModerate.test(value));
});
console.log('');

// - Ejercicio 2: Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net ó www.lemoncode.net ó lemoncode.net).
const patternLink = /^(https:\/\/www\.|www\.)?[a-z]{1,}(\.net|\.com|\.es)$/;
const linkValues = ['https://www.lemoncode.net', 'www.lemoncode.net', 'lemoncode.net', 'https:/www.lemoncode.aaa'];

console.log('Comprobar estructura link');
linkValues.forEach(value => {
  console.log(`Coincide "${patternLink}", con "${value}"? ->`, patternLink.test(value));
});

// Ejercicio 3: Validar que un color en Hexadecimal esta bien formado.
const patternHex = /^#([a-z]|\d){6}/i;
const hexValues = ['#58ACFA', '#F6CEEC', '#FFFFFF', '000000', '#FFF'];
console.log('Validar colores hexadecimales');
hexValues.forEach(value => {
  console.log(`Coincide "${patternHex}", con "${value}"? ->`, patternHex.test(value));
});
