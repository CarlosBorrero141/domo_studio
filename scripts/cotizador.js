const datos = "../datos/paquetes.json";
const post = "https://jsonplaceholder.typicode.com/posts";
let usuarioAnt = JSON.parse(localStorage.newU)
console.log(usuarioAnt)
let numRender = $("#numeroRenders");
let lugRender = $("#lugarRenders");
let calRender = $("#calidadRenders");
let saludo = $("#saludar");
let nR = $("#nR");
let lR = $("#lR");
let cR = $("#cR");
let resultado = $("#total");
let nombre = $("#nombres");
let apellidos = $("#apellidos");
let correo = $("#correo");
let telefono = $("#telefono");
let form1 = $("#form_user");
let form2 = $("#form_coti");

$("body").hide().fadeIn("slow");

let eleRenders = [
  "Numero de renders",
  "Calidad de reders",
  "Lugar de renders",
  "Total de renders",
];

let calcular = $("#calcular");

calcular.click(function () {
  var nuevoUsusario = new Usuario(
    nombre.val(),
    apellidos.val(),
    correo.val(),
    telefono.val()
  );
  var usuarioAPI = {
    title: nombre.val(),
    body: telefono.val()
  }
  nuevoUsusario.newUser();
  nuevoUsusario.saludar();
  var cotiza = new Cotizador(numRender.val(), lugRender.val(), calRender.val());
  cotiza.cali();
  form1.slideToggle();
  form2.slideToggle();

    $.post(post, usuarioAPI ,(respuesta, estado) => {
      if(estado === "success"){
        $("body").prepend(
          `<div>
          Guardado:${respuesta.title}
          </div>`
        );
      }
    })

});

$("#paquetes").click(function () {
  console.log("Boton funciona");
  

  $.getJSON(datos, function (respuesta, estado) {
    console.log(respuesta);
    $('.paquetes').remove();
    $('.historial').remove();

    if (estado === "success") {
      for (let dato of respuesta) {
        $("#vp").prepend(
          `<div class="container borde paquetes col-md" id="vp1">
                        <h2>${dato.Titulo}</h2>
                        <p> Numero de renders: ${dato["Numero de renders"]}</p>
                        <p> Lugar de renders: ${dato["Localizacion de renders"]}</p>
                        <p> Calidad de renders: ${dato["Calidad de renders"]}</p>
                        <p> Precio: ${dato["Total"]}</p>

                        </div>`
        );
      }
    }
  });
});

$('#historial').click(function(){
    $('.paquetes').remove();
    $('.historial').remove();
    $("#hist").prepend(`
    <div class = "container borde historial">
    <h2> Cotizaciones Anteriores </h2>
    <p> Nombre: ${usuarioAnt.Nombre}</p>
    <p> Apellido: ${usuarioAnt.Apellido}</p>
    <p> Correo: ${usuarioAnt.Correo}</p>
    <p> Telefono: ${usuarioAnt.Telefono} </p>
    <p> Cotizacion Anterior: ${localStorage.cotizacion}</p>
    </div>
    `);
})


