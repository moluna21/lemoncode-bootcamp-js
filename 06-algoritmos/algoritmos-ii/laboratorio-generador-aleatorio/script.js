let randomNumberArray = [];

var randomPick = (n, min, max) => {  
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min +1) + min);
    randomNumberArray.push(randomNumber);
  }
  
  console.log(n + ' Random Numbers:', randomNumberArray);

};

randomPick(10, 1, 100);
// randomPick(6, 1, 49); // Apuesta automática de la primitiva
// randomPick(15, 1, 15); // Escoge combinación de bolas de billar
// randomPick(1, 1, 6); // Tirada aleatoria de un dado

// Math.floor(Math.random() * (max - min) + min);
// The max. is exclusive and the min. is inclusive

// Math.floor(Math.random() * (max - min +1) + min);
// The max. is inclusive and the min. is inclusive
