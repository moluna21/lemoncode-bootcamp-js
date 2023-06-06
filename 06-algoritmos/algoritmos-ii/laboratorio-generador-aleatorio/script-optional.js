const randomPick = (n, min, max) => {
  let randomNumberArray = [];
  const range = max - min + 1;

  while (randomNumberArray.length < n) {
    let randomNumber = Math.floor(Math.random() * range + min);
    
    if (randomNumberArray.indexOf(randomNumber) === -1) {
      randomNumberArray.push(randomNumber);
    }
  }

  return console.log(n + ' Random Numbers:', randomNumberArray);
};

randomPick(10, 1, 100);
randomPick(6, 1, 49); // Apuesta automática de la primitiva
randomPick(15, 1, 15); // Escoge combinación de bolas de billar
randomPick(1, 1, 6); // Tirada aleatoria de un dado
