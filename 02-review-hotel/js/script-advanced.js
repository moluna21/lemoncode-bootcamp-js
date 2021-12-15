var hotel = { 
  Balmoral: {
    name: "Balmoral",
    location: "Marbella"
  },
  Oasis: {
    name: "Oasis",
    location: "Benalmádena"
  },
  Tbili: {
    name: "Tbili",
    location: "Torremolinos"
  }
}


hotelSelected = prompt("Elija el hotel sobre el que quiere hacer una reseña: Balmoral, Oasis o Tbili");

document.getElementById("hotel-name").innerHTML = ("Hotel " + hotel[hotelSelected].name);
document.getElementById("hotel-location").innerHTML = ("Located in " + hotel[hotelSelected].location);
document.getElementById("hotel-image").src = ("images/" + hotel[hotelSelected].name + ".jpg");


var showReview = confirm("¿Quieres que tu reseña sea anónima?");
document.getElementById("review").checked = showReview;
