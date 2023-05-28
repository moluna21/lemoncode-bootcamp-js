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

const searchIndex = (alphabet, letter) => {
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === letter) return i;
  }
  
  return -1;
}

let alphabetLetterIndex;

const transformLetter = (letter, fromAlphabet, toAlphabet ) => {
  alphabetLetterIndex = searchIndex(fromAlphabet, letter);

  let result = '';
  for (let i = 0; i < letter.length; i++) {
    if (alphabetLetterIndex === -1) {
      return letter;
    }
    return result = result + toAlphabet[alphabetLetterIndex];
  }
  
  return result;
}

const transformMessageToEncrypt = message => {
  const messageLowerCase = message.toLowerCase();
  let result = '';
  
  for (const letter of messageLowerCase) {
    result = result + transformLetter(letter, plainAlphabet, encryptedAlphabet);
  }

  return result;
}

const transformMessageToDescrypt = message => {
  const messageLowerCase = message.toLowerCase();
  let result = '';
  
  for (const letter of messageLowerCase) {
    result = result + transformLetter(letter, encryptedAlphabet, plainAlphabet);
  }

  return result;
}


const getMessageTransform = (input, transform) => {
  input.value;

  if (input.value) return transform(input.value)
}

const setResult = (input, result) => {
  input.value = result;
}

let resultMessage = undefined;

buttonEncrypt.addEventListener("click", function() {
  resultMessage = getMessageTransform(textareaEncrypt, transformMessageToEncrypt);

  console.log(textareaEncrypt.value, '=', resultMessage);

  setResult(textareaDescrypt, resultMessage);
});

buttonDescrypt.addEventListener("click", function() {
  resultMessage = getMessageTransform(textareaDescrypt, transformMessageToDescrypt);

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

