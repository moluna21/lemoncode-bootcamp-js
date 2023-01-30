/**
 * Producto:
 *  - Descripción.
 *  - Precio unitario.
 *  - IVA. Podrá ser normal (21%), reducido (4%) o exento. Stock disponible.
 *  - Unidades. Inicialmente 0 para todos los productos.
**/

/**
 * Extra Personal: Añadir botón reset para resetear los valores a 0
 */

const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

const cartList = document.getElementById("list");
const buttonCalculate = document.getElementById('button-calculate');
const buttonReset = document.getElementById('button-reset');
const subtotal = document.getElementById('subtotal');
const taxesTotal = document.getElementById('taxes');
const priceTotal = document.getElementById('total-price');
let productPrice = 0;
let productPriceSubtotal = 0;
let productTaxes = 0;
let productTaxesTotal = 0;
let productPriceTotal = 0;


buttonCalculate.setAttribute('disabled', true);

const showProducts = productList => {
  for (const product of productList) {
    const cartProduct = document.createElement("li");
    cartProduct.setAttribute("class", "cart__product");
    cartList.appendChild(cartProduct);
    
    // Generate LABEL
    const label = document.createElement('label');
    label.setAttribute("class", "cart__label");
    label.innerHTML = `
      ${product.description}: ${product.price}€, ${product.tax}
    `;
    cartProduct.appendChild(label);

    // Generate INPUT
    const input = document.createElement("input");
    input.setAttribute("class", "cart__input");
    input.setAttribute("type", "number");
    input.setAttribute("min", 0);
    input.setAttribute("max", product.stock);
    input.setAttribute("value", product.units);
    input.addEventListener("change", event => {
      product.units = event.target.valueAsNumber;
      product.units !== 0 ? buttonCalculate.removeAttribute('disabled') : buttonCalculate.setAttribute('disabled', true);
    });

    cartProduct.appendChild(input);

    buttonReset.addEventListener('click', () => {
      const resetInputValues = () => {
        if (product.units !== 0) {
          product.units = 0;
          
          input.value = product.units;
          console.log(product.description, input.value);
          console.log(product.description, product.units);

          subtotal.innerHTML = '';
          taxesTotal.innerHTML = '';
          priceTotal.innerHTML = '';
          productPriceSubtotal = 0;
          productTaxesTotal = 0;
          productTaxesTotal = 0;
        }
      }

      resetInputValues(productList);
    });
  }
}

showProducts(products);

buttonCalculate.addEventListener('click', () => {
  const calcTotal = () => {
    for (const product of products) {
      productPrice = parseFloat(product.price) * parseInt(product.units);
      console.log(product.description, productPrice);
      
      //Calc subtotal
      productPriceSubtotal += productPrice;
      console.log('Total:', productPriceSubtotal);
  
      subtotal.innerHTML = productPriceSubtotal;

      //Calc Taxes
      productTaxes = parseFloat(productPrice) * parseFloat(product.tax) / 100;
      console.log('Tasas de:', product.description, productTaxes);
      productTaxesTotal += productTaxes;
      console.log('Total Taxes:', productTaxesTotal);
      taxesTotal.innerHTML = productTaxesTotal;

      //Cal Total price
      productPriceTotal = productPriceSubtotal + productTaxesTotal;
      priceTotal.innerHTML = productPriceTotal + '€';
    } 
  }
  
  calcTotal(products);
});
