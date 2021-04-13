const datos = "../datos/paquetes.json"

let numRender = $('#numeroRenders')
let lugRender = $('#lugarRenders')
let calRender = $('#calidadRenders')
let saludo = $('#saludar')
let nR = $('#nR')
let lR = $('#lR')
let cR = $('#cR')
let resultado = $('#total')
let nombre = $('#nombres')
let apellidos = $('#apellidos')
let correo = $('#correo')
let telefono = $('#telefono')
let form1 = $('#form_user')
let form2 = $('#form_coti')



$('body').hide()
        .fadeIn('slow')


        
class Usuario{
    constructor(nombre, apellidos, correo, telefono){
        this.Nombre = nombre;
        this.Apellido = apellidos;
        this.correo = correo;
        this.telefono = parseInt(telefono)
    }

    newUser = function (){
        let userJson = {
            "Nombre": this.Nombre,
            "Apellido": this.Apellido,
            "Correo": this.correo,
            "Telefono": this.telefono
        }
        console.log(userJson)
        return userJson;
    }

   

    saludar = function(){
        saludo.text('Hola ' + this.Nombre + ' como estas?, gracias por cotizar con nosotros');  
        
        
    }
}






let eleRenders = ['Numero de renders', 'Calidad de reders', 'Lugar de renders', 'Total de renders']

let calcular = $('#calcular')

class Cotizador{
    constructor(numeroRenders, intOEx, calidad){
        this.numeroRenders = parseInt(numeroRenders);
        this.intOEx = intOEx.toLowerCase();
        this.calidad = calidad.toLowerCase();
    }

    getCalidad = function() {
        let precioCalidad;
        if(this.calidad == 'alta'){
            precioCalidad = 300000;
        }else if (this.calidad == 'media'){
            precioCalidad = 200000;
        }else if (this.calidad == 'baja'){
            precioCalidad = 100000;
        }       
        console.log(precioCalidad);
        return precioCalidad;
    }

    getLugar = function() {
        let precioLugar    
        if(this.intOEx == 'exterior'){
            precioLugar = 200000
        }else if (this.intOEx == 'interior'){
            precioLugar = 150000
        }
        console.log(precioLugar);
        return precioLugar
    }

    getTotal = function() {
        let total = (this.getLugar() + this.getCalidad())*this.numeroRenders;
        console.log(total)
        return total
    }

    cali = function (){
        let total = this.getTotal()    
       
        nR.text('El total para ' + this.numeroRenders + '  renders, ubicados en el ' + this.intOEx + ' con calidad ' + this.calidad + ' es de ' + total); 
        let usuario = {
            'Nombre': nombre.val(),
            'Apellido': apellidos.val(),
            'Correo': correo.val(),
            'Telefono': telefono.val(),
            'Numero de Renders': numRender.val(),
            'Lugar de Renders': lugRender.val(),
            'Calidad de Renders': calRender.val(),
            'Total Cotizacion': total
        }
        console.log(usuario)

        

        
    }
}







calcular.click( function(){
    var nuevoUsusario = new Usuario(nombre.val(), apellidos.val(), correo.val(), telefono.val() )
    nuevoUsusario.newUser();
    nuevoUsusario.saludar();
    var cotiza = new Cotizador(numRender.val(), lugRender.val(), calRender.val())
    cotiza.cali();
    form1.slideToggle();
    form2.slideToggle();

})


$('#paquetes').click(function(){
    console.log("Boton funciona")
    
    $.getJSON(datos, function(respuesta, estado){
        console.log(respuesta)
        if(estado === "success"){
            for (let dato of respuesta){
                $('#vp').prepend(
                    `<div class="container borde">
                        <h2>${dato.Titulo}</h2>
                        <p> Numero de renders: ${dato["Numero de renders"]}</p>
                        <p> Lugar de renders: ${dato["Localizacion de renders"]}</p>
                        <p> Calidad de renders: ${dato["Calidad de renders"]}</p>
                        <p> Precio: ${dato["Total"]}</p>

                        </div>`
                );
            }
        }
    })
})



