const cart = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
  }
];

// OBLIGATORY PRACTISES
// 1. Mostrar el carrito de la compra
let mainCart = document.getElementById('main-cart');

console.log('Carrito:');

for (let i = 0; i < cart.length; i++) { 
  printProductList(mainCart, cart[i])

  console.log(cart[i]);
}

console.log(' ');


// 2. Eliminar el producto con id 54657 del carrito de la compra
let cartRemovedProduct = document.getElementById('cart-removed-product');
let index;

for (let i = 0; i < cart.length; i++) {
  if (cart[i].id == 54657) {
    index = i;
    console.log('Posición del producto con id 54657: ' + index);
  }
}

cart.splice(index, 1);

console.log('Productos después de eliminar el que tiene la ID "54657": ');

for (product of cart) {
  printProductList(cartRemovedProduct, product);

  console.log(product);
}

console.log(' ');


// 3. Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad)
let totalPrice = 0;
let totalPriceProduct = 0;
let totalCartList = document.getElementById('total-cart-list');
let totalCartPrice = document.getElementById('total-cart-price');

for (let i = 0; i < cart.length; i++) {
  totalPriceProduct = parseInt(cart[i].price) * cart[i].count;

  console.log('Precio total de ' + cart[i].name + ': ' + totalPriceProduct);
  totalCartList.innerHTML += `
    <li>
      <p><strong>Precio total por ${cart[i].count} unidades de "${cart[i].name}"</strong>: ${totalPriceProduct}</p>
    </li>
  `;

  totalPrice += totalPriceProduct;
}

console.log('Precio total carrito: ' + totalPrice);
totalCartPrice.innerHTML += `
  Precio total del carrito: ${totalPrice}
`;

console.log(' ');


// 4. Filtrar por los productos que sean prime.
let primeList = document.getElementById('prime-list');

for (let i = 0; i < cart.length; i++) {
  const isPremium = cart[i].premium;
  
  if (isPremium === true) {
    cart[i];
    
    printProductList(primeList, cart[i]);
    
    console.log('Producto prime:');
    console.log(cart[i]);
  }
}




// OPTIONAL PRACTISES

const primeShippingCart = document.getElementById('prime-shipping-cart');
const shippingCosts = document.getElementById('shipping-info');
let isPremium;

// 1. Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido tiene gastos de envío".
for (let i = 0; i < cart.length; i++) {
  isPremium = cart[i].premium;

  cart[i];

  // 2. Mostrar el carrito en un listado de html básico.
  printProductList(primeShippingCart, cart[i]);

}

if (isPremium === true) {
  shippingCosts.innerHTML += 'Gastos de envío 0.';
  console.log('Gastos de envío 0');
} else {
  shippingCosts.innerHTML += 'Con gastos de envío.';
  console.log('Con gastos de envío');
}

console.log(' ');


// 3. Aplicar un descuento del 5% si la compra es mayor de 100 €.
for (let i = 0; i < cart.length; i++) {
  let totalPrice = 0;
  const totalPriceProductCount = parseInt(cart[i].price) * cart[i].count;

  console.log('Precio total de ' + cart[i].name + ': ' + totalPriceProductCount);
  document.getElementById('final-cart').innerHTML += `
    <li>
      <p><strong>Precio total por ${cart[i].count} unidades de "${cart[i].name}"</strong>: ${totalPriceProductCount}</p>
    </li>
  `;

  totalPrice += totalPriceProductCount;
}

document.getElementById('total-price').innerHTML += `Precio total: ${totalPrice}€`;
console.log('Precio total carrito: ' + totalPrice);

if (totalPrice > 50) {
  let discount = totalPrice * 0.05;
  document.getElementById('total-discount').innerHTML += `Descuento por ser más de 50€: ${discount}€`;

  console.log('Discount 5%: ' + discount);

  totalPrice = totalPrice - discount;
  document.getElementById('price-discount').innerHTML += `Precio total con 5% de descuento: ${totalPrice}€`;

  console.log('Precio total del carrito con 5% descuento: ' + totalPrice);
} else {
  document.getElementById('total-discount').innerHTML += `No tiene descuento`;
}

function printProductList(list, product) {
  list.innerHTML += `
    <li>
      <p><strong>ID</strong>: ${product.id}</p>
      <p><strong>Name</strong>: ${product.name}</p>
      <p><strong>Price</strong>: ${product.price}</p>
      <p><strong>Count</strong>: ${product.count}</p>
      <p><strong>Premium</strong>: ${product.premium}</p>
    </li>
  `;
}