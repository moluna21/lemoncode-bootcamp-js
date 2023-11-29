// DATA
const WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];

const myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true),
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true),
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true),
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true),
  },
];

function setAvailability() {
  for (let i = 0; i < myTeam.length; i++) {
    const member = myTeam[i];
    const availability = member.availability
    console.log(`El usuario ${member.name} tiene el siguiente horario`);

    for (let j = 0; j < availability.length; j++) {
      const randomAvailability = Math.random() < 0.5 ? true : false;
      myTeam[i].availability[j] = randomAvailability;
      console.log(`${WORK_HOURS[j]}: ${randomAvailability ? 'Disponible' : 'No disponible'}`);
    }

    console.log('');
  }
}

function findFirstAvailable() {
  for (let i = 0; i < myTeam[0].availability.length; i++) {
    const availabilityMatch = new Array(myTeam.length);

    for (let j = 0; j < myTeam.length; j++) {
      availabilityMatch[j] = myTeam[j].availability[i];
    }

    if (allAvailability(availabilityMatch)) {
      return console.log(`* Hueco encontrado en el horario ${WORK_HOURS[i]}`);
    }
  }

  return console.log('* Lo siento. No hay hueco disponible en el equipo.');
}

function allAvailability(array) {
  for (const el of array) {
    if (!el) {
      return false;
    }
  }

  return true;
}

setAvailability();
findFirstAvailable()
