// Podremos dar cambio de billetes de:
// 5 €, 10 €, 20 €, 50 €, 100 € y 200 €
// (no daremos cambio de 500 €).
// Así mismo, tendremos monedas de:
//  1, 2, 5, 10, 20 y 50 cént; y 1 y 2 euros.

// Al presionar el botón calcular,
// un algoritmo debe procesar los cálculos necesarios 
// para que devuelva un resultado con el número de billetes y 
// monedas necesarias para hacer la devolución.

const cashRegister = {
  "banknotes": {
    200: 3,
    100: 5,
    50: 10,
    20: 0,
    10: 2,
    5: 4,
  },
  "coins": {
    2: 0,
    1: 1,
    0.50: 12,
    0.20: 15,
    0.10: 8,
    0.05: 10,
    0.02: 16,
    0.01: 26,
  },
};

const details = document.getElementById('details');
const inputAmountPurchase = document.getElementById('amount-purchase');
const inputAmountDelivered = document.getElementById('money-delivered');
const buttonCalc = document.getElementById('button-calc');
let refundResult = document.getElementById('refund-result');
let pendingRefund = document.getElementById('pending-refund');

// * EXTRA Personal
const buttonClean = document.getElementById('button-clean');
let totalAmountPurchase = document.getElementById('total-amount-purchase');
let totalAmountDelivered = document.getElementById('total-money-delivered');
// ** //

function calcDiff() {
  let refund = {};

  const getAmountPurchase = inputAmountPurchase.addEventListener('change', function () {
    refund = inputAmountDelivered.value - inputAmountPurchase.value;
    console.log('Importe compra: ', inputAmountPurchase.value);
    return refund;
  });

  const getAmountDelivered = inputAmountDelivered.addEventListener('change', function () {
    refund = inputAmountDelivered.value - inputAmountPurchase.value;
    console.log('Dinero entregado: ', inputAmountDelivered.value);
    return refund;
  });

  buttonClean.addEventListener('click', function () {
    inputAmountPurchase.value = "";
    inputAmountDelivered.value = "";
    details.innerHTML = '';
    refundResult.innerHTML = '';
    pendingRefund.innerHTML = '';
    totalAmountPurchase.innerHTML = '';
    totalAmountDelivered.innerHTML = '';
  });

  buttonCalc.addEventListener('click', function () {
    totalAmountPurchase.innerHTML = '';
    totalAmountDelivered.innerHTML = '';
    details.innerHTML = '';
    refundResult.innerHTML = '';
    pendingRefund.innerHTML = '';
    
    getAmountPurchase;
    getAmountDelivered;

    totalAmountPurchase.innerHTML = inputAmountPurchase.value;
    totalAmountDelivered.innerHTML = inputAmountDelivered.value;

    console.log('Resultado: ', refund);
    refundResult.innerHTML = refund < 0 ? `falta por pagar ${refund * -1}€` : `${refund}€`;

    for (let banknote in cashRegister.banknotes) {
      let banknoteType = parseInt(banknote);
      let countAvailable = cashRegister.banknotes[banknote];
      console.log('Hay', countAvailable, 'billetes de', banknoteType);

      if (banknoteType <= refund && countAvailable > 0) {
        const banknoteCount = Math.floor(refund / banknoteType);
        const amountUsed = Math.min(countAvailable, banknoteCount);
        console.log(refund, 'menos', amountUsed, 'billetes de', banknoteType, 'Pendiente de devolver:', banknoteCount);

        cashRegister.banknotes[banknote] -= amountUsed;
        refund[banknoteType] = amountUsed;
        console.log('Se han entregado', amountUsed, 'billetes de', banknoteType);
        details.innerHTML += `<li>Se han entregado ${amountUsed} billetes de ${banknoteType}</li>`;

        refund -= amountUsed * banknoteType;
        console.log('Pendiente a devolver:', refund);
      }
    }

    for (let coin in cashRegister.coins) {
      let coinsType = parseFloat(coin);
      let countAvailable = cashRegister.coins[coin];
      console.log('Hay', countAvailable, 'monedas de', coinsType);

      if (coinsType <= refund && countAvailable > 0) {
        const coinsCount = Math.floor(refund / coinsType);
        const amountUsed = Math.min(countAvailable, coinsCount);
        console.log(refund, 'menos', amountUsed, 'monedas de', coinsType, 'Pendiente de devolver:', coinsCount);

        cashRegister.coins[coin] -= amountUsed;
        refund[coinsType] = amountUsed;
        console.log('Se han entregado', amountUsed, 'monedas de', coinsType);
        details.innerHTML += `<li>Se han entregado ${amountUsed} monedas de ${coinsType} céntimos</li>`;

        refund -= amountUsed * coinsType;
        console.log('Pendiente a devolver:', refund);
      }
    }

    if (refund > 0) {
      pendingRefund.innerHTML += `${refund}. No hay dinero suficiente en caja`;
    } else {
      pendingRefund.innerHTML += `${refund}€`;
    }
    console.log('Reembolso pendiente', refund);

    inputAmountPurchase.value = "";
    inputAmountDelivered.value = "";

    return refund;
  });
}

calcDiff();
