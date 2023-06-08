console.log('Módulo 2 - Algoritmos II - Laboratorio');
console.log(' ');

const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

console.log('Alfabeto plano:', plainAlphabet);
console.log('Alfabeto encriptado:', encryptedAlphabet);

const textareaEncrypt = document.getElementById('textarea-encrypt');
const textareaDescrypt = document.getElementById('textarea-descrypt');

const buttonEncrypt = document.getElementById('button-encrypt');
const buttonDescrypt = document.getElementById('button-descrypt');
const buttonClear = document.getElementById('button-clear');

let alphabetLetterIndex;

const transformLetter = (letter, fromAlphabet, toAlphabet ) => {
  alphabetLetterIndex = fromAlphabet.indexOf(letter);

  let result = '';
  for (let i = 0; i < letter.length; i++) {
    if (alphabetLetterIndex === -1) {
      return letter;
    }
    return result = result + toAlphabet[alphabetLetterIndex];
  }
  return result;
}

const transformMessage = (message, fromAlphabet, toAlphabet) => {
  const messageLowerCase = message.toLowerCase();
  let result = '';
  
  for (const letter of messageLowerCase) {
    result = result + transformLetter(letter, fromAlphabet, toAlphabet);
  }

  return result;
}

const setResult = (input, result) => {
  input.value = result;
}

let resultMessage = undefined;

buttonEncrypt.addEventListener("click", function() {
  if (textareaEncrypt.value) {
    resultMessage = transformMessage(textareaEncrypt.value, plainAlphabet, encryptedAlphabet);
  }

  console.log(textareaEncrypt.value, '=', resultMessage);

  setResult(textareaDescrypt, resultMessage);
});

buttonDescrypt.addEventListener("click", function() {
  if (textareaDescrypt.value) {
    resultMessage = transformMessage(textareaDescrypt.value, encryptedAlphabet, plainAlphabet);
  }

  console.log(textareaDescrypt.value, '=', resultMessage);

  setResult(textareaEncrypt, resultMessage);
});

/* Extra Personal */
buttonClear.addEventListener("click", function() {
  resultMessage = '';

  console.log('Valores reseteados');

  setResult(textareaEncrypt, resultMessage);
  setResult(textareaDescrypt, resultMessage);
});
