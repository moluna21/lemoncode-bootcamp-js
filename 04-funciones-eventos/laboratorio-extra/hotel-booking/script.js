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

document.getElementById("button-result").addEventListener("click", function() {
  booking.room = getRoom();
  
  if (booking.room === 'Standard') {
    booking.room = 100;
    console.log('Precio de habitación Standar: ' + booking.room + '€');
    
  } else if(booking.room === 'Junior Suite') {
    booking.room = 120;
    console.log('Precio de habitación Junior Suite: ' + booking.room + '€');
    
  } else if(booking.room === 'Suite') {
    booking.room = 150;
    console.log('Precio de habitación Suite: ' + booking.room + '€');
    
  } else {
    undefined
  }

  booking.spa = getSpa();
  booking.spa === true ? booking.spa = 20 : booking.spa = 0;
  console.log('Spa: ' + booking.spa + '€');
  
  booking.bed = getBed();
  var bedRoom = () => {
    value = booking.room + booking.spa;

    if (booking.bed === 'Individual') {
      booking.bed = value - (value * 0.25);
      console.log('Precio por habitación Individual: ' + booking.bed + '€');

      return booking.bed;
      
    } else if(booking.bed === 'Doble') {
      booking.bed = value;
      console.log('Precio por habitación Doble: ' + booking.bed + '€');

      return booking.bed;
      
    } else if(booking.bed === 'Triple') {
      booking.bed = value + (value * 0.25);
      console.log('Precio por habitación Triple: ' + booking.bed + '€');

      return booking.bed;
      
    } else {
      undefined
    }

  }
  
  console.log('Cama tipo: ' + booking.bed);
  
  booking.night = getNightNumber();
  booking.night === '' ? booking.night = 0 : booking.night;
  console.log('Nº de noches: ' + booking.night);

  var nightPrice = bedRoom() * booking.night;

  console.log('Precio por noche: ' + nightPrice);

  booking.parkingNight = getNightParkingNumber();
  console.log('Noches de parking: ' + booking.parkingNight);
  
  booking.parkingNight === '' ? booking.parkingNight = 0 : booking.parkingNight = booking.parkingNight * 10;
  console.log('Precio total por Noches de parking: ' + booking.parkingNight);
  
  console.log(nightPrice + booking.parkingNight);
  

  result = nightPrice + booking.parkingNight;
  
  setResult(result);
});
