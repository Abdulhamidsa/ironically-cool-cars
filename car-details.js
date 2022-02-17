const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea21-07db.restdb.io/rest/ironicallycoolcars/" + id;

const options = {
  headers: {
    "x-apikey": "620e4b1534fd62156585872a",
  },
};
fetch(url, options)
  .then((res) => res.json())
  .then((data) => showCars(data));

function showCars(cars) {
  console.log(cars);
  document.querySelector(".price").textContent = cars.price + " " + "$";
  document.querySelector(".card-header").textContent = cars.brand;
  document.querySelector(".production_year").textContent = cars.production_year;
  document.querySelector(".colour").textContent = cars.colour;
  document.querySelector(".brand").textContent =
    cars.brand + " / " + cars.model;
  document.querySelector(".legal_to_drive").textContent = cars.legal_to_drive;
  document.querySelector(".shame_factor").textContent = cars.shame_factor;
  document.querySelector(".description").textContent = cars.short_description;
  document.querySelector(".seated_passengers").textContent =
    cars.seated_passengers;
  document.querySelector(
    ".product-card-photo"
  ).src = `https://mediarei.com/data/${cars.id}.jpeg`;
}
