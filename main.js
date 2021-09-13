const button = document.getElementById("buttonJ");
let proxy = "https://cors-anywhere.herokuapp.com/";
button.addEventListener("click", () => {
  $.ajax({
    url: "https://api-dolar-argentina.herokuapp.com/api/dolaroficial",
    type: "GET",
    crossDomain: true,
    headers: {
      accept: "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "http://localhost:5500",
    },
    success: function (data) {
      $(".container").append(
        `<p>Dolar compra:$ ${data.compra} Dolar venta:$ ${data.venta}<p>`
      );
    },
  });
});
const butt = document.getElementById("buttonF");
butt.addEventListener("click", () => {
  fetch("https://api-dolar-argentina.herokuapp.com/api/dolaroficial", {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res);
  });
});
