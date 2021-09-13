const button = document.getElementById("button");
let proxy = 'https://cors-anywhere.herokuapp.com/'
button.addEventListener("click", () => {
  $.ajax({
    url: 'https://api-dolar-argentina.herokuapp.com/api/dolaroficial',
    type: "GET",
    crossDomain: true,
    headers: {
        "accept": "application/json",
        'Access-Control-Allow-Credentials': 'true',
        "Access-Control-Allow-Origin":"http://localhost:5500"
    },
    success: function(data) {
        $(".container").append(`<p>Dolar compra:$ ${data.compra} Dolar venta:$ ${data.venta}<p>`);
    }
  });
});