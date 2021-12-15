var hotel = {
  name: "Balmoral",
  location: "Ubicado en Marbella",
  image: "https://www.decotherapy.com/app/uploads/2018/08/decotherapy-hotel-boutique-la-malcontenta-porche-costa-brava-decoracion-boho-chic.jpg",
  stars: {
    1: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    2: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    3: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    4: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    5: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  }
}

document.getElementById("hotel-name").innerHTML = ("Hotel " + hotel.name);
document.getElementById("hotel-location").innerHTML = (" " + hotel.location);
document.getElementById("hotel-image").src = (hotel.image);

ranking = prompt("¿Cuántas estrellas le pondrías al Hotel Balmoral? Escribe una puntuación del 1 al 5");

document.getElementById("hotel-stars").innerHTML = (hotel.stars[ranking]);
