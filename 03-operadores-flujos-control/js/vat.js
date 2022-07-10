// books: 4%
// food: 10%
// default: 21%

// Type of product: clothes, food, book
const product = { 
  count: 3,
  price: 12.55,
  type: 'clothes'
};

let result = 0;

document.getElementById('product-type').innerHTML = product.type;
document.getElementById('product-count').innerHTML = product.count;
document.getElementById('product-price').innerHTML = product.price + ' €';

console.log('Tipo de producto: ' + product.type);

// OPTION - With Functions

// Calcular precio total sin IVA
function getTotal(count = product.count, price = product.price) {
  const productCount = count >= 0 ? count : 0;
  const productPrice = price >= 0 ? price : 0;

  return productCount * productPrice;
}

getTotal();

document.getElementById('total-purchase').innerHTML = getTotal();
console.log('Total sin IVA: ' + getTotal() + '€');


// Calcular IVA según tipo de producto
function getVat(type = product.type) {
  let vatType = 0;

  switch(type) {
    case 'book':
      vatType = 0.04;
      vatPercentType = '4%';
      break;
    case 'clothes':
      vatType = 0.1;
      vatPercentType = '10%';
      break;
    default:
      vatType = 0.21;
      vatPercentType = '21%';
      break;
  }
  
  return getTotal() * vatType;
}

getVat();
document.getElementById('total-vat').innerHTML = getVat();
console.log('IVA: ' + getVat() + '€');

// // Calcular precio total IVA incl.
function getTotalVat() {
  // return getTotal() > 0 ? getTotal() + getVat() : 0;
  return getTotal() + getVat();
}

getTotalVat();
document.getElementById('total-price').innerHTML = getTotalVat();
document.getElementById('vat-percent').innerHTML = vatPercentType;
console.log('Total (' + vatPercentType + ' IVA incl.): ' + getTotalVat() + '€');

// Other options of print the data
// function printProductPrice(product) {
//   const subtotal = getTotal(product);
//   const vat = getVat(product);
//   const total = subtotal + vat;

//   console.log("Subtotal:", subtotal + "€");
//   console.log("IVA:", vat + "€");
//   console.log("Total:", total + "€");
// }

// printProductPrice();



// OPTION - Without Functions
// if (product.type === "clothes" || product.type === "book" || product.type === "food") {
//   const operatorOne =
//   product.count >= 0 ? product.count : 0;
//   const operatorTwo =
//   product.price >= 0 ? product.price : 0;

//   // Calcular precio total sin IVA
//   totalPurchase = operatorOne * operatorTwo;
//   document.getElementById('total-purchase').innerHTML = totalPurchase;
//   console.log('Tipo de producto: ' + product.type);
//   console.log('Total sin IVA: ' + totalPurchase + '€');
// }

// // Calcular IVA según tipo de producto
// let vatType = 0;
// switch(product.type) {
//   case 'book':
//     vatType = 0.04;
//     vatPercentType = '4%';
//     break;
//   case 'clothes':
//     vatType = 0.10;
//     vatPercentType = '10%';
//     break;
//   default:
//     vatType = 0.21;
//     vatPercentType = '21%';
//     break;
// }

// let totalVatProduct = totalPurchase * vatType;
// document.getElementById('total-vat').innerHTML = totalVatProduct;
// console.log('IVA: ' + totalVatProduct);

// // // Calcular precio total IVA incl.
// let totalPrice = totalPurchase + totalVatProduct;
// document.getElementById('total-price').innerHTML = totalPrice;
// document.getElementById('vat-percent').innerHTML = vatPercentType  + '€';
// console.log('Total (' + vatPercentType + ' IVA incl.): ' + totalPrice + '€');