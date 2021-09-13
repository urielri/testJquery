const button = document.getElementById("buttonJquery");
let proxy = "https://cors-anywhere.herokuapp.com/";
button.addEventListener("click", () => {
  $.ajax({
    url: "https://api-dolar-argentina.herokuapp.com/api/dolaroficial",
    type: "GET",
    crossDomain: true,
    headers: {
      accept: "application/json",
      "Access-Control-Allow-Credentials": "true",
    },
    success: function (data) {
      $("#p").append(
        `<p>Dolar compra: ${data.compra} Dolar venta: ${data.venta}<p>`
      );
    },
  });
});
const buttonFetch = document.getElementById("buttonFetch");
buttonFetch.addEventListener("click", () => {
  fetch("https://rickandmortyapi.com/api/character/1", {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      $("#p").append(
        `<p>Nombre personaje: ${res.name} especie: ${res.species}<p>`
      );
    });
  buttonFetch.disabled = true;
});
const buttonJqueryM = document.getElementById("buttonJqueryM");
buttonJqueryM.addEventListener("click", () => {
  $.ajax({
    url: "https://rickandmortyapi.com/api/character/1",
    type: "GET",
    crossDomain: true,
    headers: {
      accept: "application/json",
      "Access-Control-Allow-Credentials": "true",
    },
    success: function (data) {
      $("#p").append(`<p>Name: ${data.name} Specie: ${data.species}<p>`);
    },
  });
  buttonJqueryM.disabled = true;
});
