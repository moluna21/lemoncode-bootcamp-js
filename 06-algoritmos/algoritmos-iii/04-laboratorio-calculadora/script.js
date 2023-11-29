// Podremos dar cambio de billetes de:
// 5 €, 10 €, 20 €, 50 €, 100 € y 200 €
// (no daremos cambio de 500 €).
// Así mismo, tendremos monedas de:
//  1, 2, 5, 10, 20 y 50 cént; y 1 y 2 euros.


// Al presionar el botón calcular,
// un algoritmo debe procesar los cálculos necesarios 
// para que devuelva un resultado con el número de billetes y 
// monedas necesarias para hacer la devolución.

const banknotes = [200, 100, 50, 20, 10, 5];
const coinsEuro = [2, 1];
const coinsCent = [50, 20, 10, 5, 2, 1];

const details = document.getElementById('details');
const inputAmountPurchase = document.getElementById('amount-purchase');
const inputAmountDelivered = document.getElementById('money-delivered');
const buttonCalc = document.getElementById('button-calc');
const buttonClean = document.getElementById('button-clean');
let totalAmountPurchase = document.getElementById('total-amount-purchase');
let totalAmountDelivered = document.getElementById('total-money-delivered');
let refundResult = document.getElementById('refund-result');
let pendingRefund = document.getElementById('pending-refund');

function calcDiff() {
  let refund = 0;

  const calculateRefund = function (input, purchase, delivered) {
    input.addEventListener('change', function () {
      console.log(parseInt(input.value));
      refund = purchase.value - delivered.value;
      return refund;
    });
  };

  inputAmountPurchase.addEventListener('change', calculateRefund(inputAmountPurchase, inputAmountPurchase, inputAmountDelivered));
  
  inputAmountDelivered.addEventListener('change', calculateRefund(inputAmountDelivered, inputAmountPurchase, inputAmountDelivered));

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
    
    totalAmountPurchase.innerHTML = inputAmountPurchase.value;
    totalAmountDelivered.innerHTML = inputAmountDelivered.value;
    
    refundResult.innerHTML = refund < 0 ? `${refund * -1}€` : `Falta ${refund}€`;
    refund = refund < 0 ? (refund * -1) : refund;
    console.log('Resultado: ', refund);

    const calcMoneyBack = (refundMoney, banknotes) => {
      refund = refund - (parseInt(refundMoney) * banknotes);
      console.log(refund);
    }

    let feedback = '';

    for (let i = 0; i < banknotes.length; i++) {
      let refundResult = refund / banknotes[i];

      if (refundResult > 1) {
        feedback = refundResult > 1 ? (parseInt(refundResult) + ' billetes de: ' + banknotes[i] + '€') : (parseInt(refundResult) + ' billete de: ' + banknotes[i] + '€');
        console.log(feedback);
        calcMoneyBack(refundResult, banknotes[i]);
        details.innerHTML += `<li>${feedback}</li>`;
      }

    }

    for (let i = 0; i < coinsEuro.length; i++) {
      let refundResult = refund / coinsEuro[i];

      if (refundResult >= 1) {
        feedback = refundResult > 1 ? (parseInt(refundResult) + ' monedas de: ' + coinsEuro[i] + '€') : (parseInt(refundResult) + ' moneda de: ' + coinsEuro[i] + '€');
        console.log(feedback);
        calcMoneyBack(refundResult, coinsEuro[i]);
        details.innerHTML += `<li>${feedback}</li>`;
      }
    }

    for (let i = 0; i < coinsCent.length; i++) {
      let refundResult = refund / coinsCent[i];

      if (refundResult > 1) {
        feedback = refundResult > 1 ? (parseInt(refundResult) + ' monedas de: ' + coinsCent[i] + ' céntimos') : ('Soy ' + parseInt(refundResult) + ' moneda de: ' + coinsCent[i] + ' céntimos');
        console.log(feedback);
        calcMoneyBack(refundResult, coinsEuro[i]);
        details.innerHTML += `<li>${feedback}</li>`;
      }
    }
    
    pendingRefund.innerHTML += `${refund}€`;

    console.log('Reembolso pendiente', refund);

    inputAmountPurchase.value = "";
    inputAmountDelivered.value = "";
  });
}

calcDiff();
