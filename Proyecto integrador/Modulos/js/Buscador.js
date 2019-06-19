window.addEventListener("load", function () {


  var tresCaracteres = document.querySelector("#caracteres")
console.log(tresCaracteres);

  // if (tresCaracteres.value.length < 3) {
  //   event.preventDefault();
  //   alert("hola")
    // UIkit.notification({
    //     message: 'Ingresá un nombre de 3 caracteres o más!',
    //     status: 'warning',
    //     pos: 'top-center',
    //     timeout: 3000
    //   });
    // }else {
// }



  var queryString = new URLSearchParams(location.search)
  var busco = queryString.get("buscador")
  console.log("busqueda" + busco);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=0bcd16440b25702a4e2645e9b22f2a2d&language=en-US&query=" + busco + "&page=1&include_adult=false")
  .then(function(respuesta) {
    return respuesta.json()
  })


  .then(function(informacion) {
    console.log(informacion);
    console.log(informacion.results.length);



    var div
    var imagen
    var nombre
    var genero
    var id
    document.querySelector(".busqueda").innerHTML += "Resultados para: " + busco
    for (var i = 0; i < informacion.results.length; i++) {
        console.log(informacion.results[i]);
        imagen =  "https://image.tmdb.org/t/p/w500/" + informacion.results[i].poster_path;
        nombre = informacion.results[i].title;
        id = informacion.results[i].id;
        div = "<div class='col-md-2 populares'>"
        div +=    "<a href='../pagina5/detallePelicula.html?id=" + id + "'>" + "<img class='w-100 card-img' src=" + imagen + ">" + "</a>"
        div +=    "<h5 class='card-title text-white'>" + nombre + "</h5>";
        div += "</div>"
        document.querySelector(".resultados").innerHTML += div


    }

})
  .catch(function(error) {
        console.log("Error: " + error);
  })
})
