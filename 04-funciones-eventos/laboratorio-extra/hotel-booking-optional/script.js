var booking = {
  room: 0,
  spa: 0,
  bed: '',
  night: 0,
  parkingNight: 10,
}

var getRoom = () => document.getElementById("selector-room").value;
var getSpa = () => document.getElementById("selector-spa").checked;
var getBed = () => document.getElementById("selector-bed").value;
var getNightNumber = () => document.getElementById("night-number").value;
var getNightParkingNumber = () => document.getElementById("night-parking-number").value;

var setResult = (result) => {
  document.getElementById("print-result").innerHTML = result;
}

const getCurrentRoom = () => {
  booking.room = getRoom();
  
  if (booking.room === 'Default') {
    booking.room = 0;
    
  } else if(booking.room === 'Standard') {
    booking.room = 100;
    
  } else if(booking.room === 'Junior Suite') {
    booking.room = 120;
    
  } else if(booking.room === 'Suite') {
    booking.room = 150;
    
  } else {
    undefined
  }

  return booking.room;
}

const getCurrentSpa = () => {
  booking.spa = getSpa();
  booking.spa === true ? booking.spa = 20 : booking.spa = 0;

  return booking.spa;
}

const getCurrentBed = () => {
  booking.bed = getBed();

  var bedRoom = () => {
    booking.room = getCurrentRoom();
    booking.spa = getCurrentSpa();
    value = booking.room + booking.spa;

    if (booking.bed === 'Default') {
      booking.bed = value - value;

      return booking.bed;
      
    } else if (booking.bed === 'Individual') {
      booking.bed = value - (value * 0.25);

      return booking.bed;
      
    } else if(booking.bed === 'Doble') {
      booking.bed = value;

      return booking.bed;
      
    } else if(booking.bed === 'Triple') {
      booking.bed = value + (value * 0.25);

      return booking.bed;
      
    } else {
      undefined
    }
  }

  return bedRoom();
}

const getCurrentNight = () => {
  booking.night = getNightNumber();
  booking.night === '' ? booking.night = 0 : booking.night;

  return booking.night;
}

const getCurrentNightPrice = () => {
  var nightPrice = getCurrentBed() * getCurrentNight();

  return nightPrice;
}

const getCurrentParkingNightPrice = () => {
  booking.parkingNight = getNightParkingNumber();
  booking.parkingNight === '' ? booking.parkingNight = 0 : booking.parkingNight = booking.parkingNight * 10;

  const currentNightPrice = getCurrentNightPrice();

  result = currentNightPrice + booking.parkingNight;

  return result;
}

const handleRoom = document.getElementById("selector-room").addEventListener("change", function() {
  setResult(getCurrentRoom());
});

const handleSpa = document.getElementById("selector-spa").addEventListener("change", function() {
  const currentRoom = getCurrentRoom();
  const currentSpa = getCurrentSpa();

  const sumResult = () => currentRoom + parseInt(currentSpa);

  setResult(sumResult());
});

const handleBed = document.getElementById("selector-bed").addEventListener("change", function() {
  const currentBed = getCurrentBed();
  setResult(currentBed);
});

const handleNight= document.getElementById("night-number").addEventListener("change", function() {
  setResult(getCurrentNightPrice());
});

const handleParking = document.getElementById("night-parking-number").addEventListener("change", function() {
  setResult(getCurrentParkingNightPrice());
});
