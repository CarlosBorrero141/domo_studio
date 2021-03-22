
let numRender = document.getElementById('numeroRenders')
let lugRender = document.getElementById('lugarRenders')
let calRender = document.getElementById('calidadRenders')
let saludo = document.getElementById('saludar');
let nR = document.getElementById('nR');
let lR = document.getElementById('lR');
let cR = document.getElementById('cR');
let resultado = document.getElementById('total');
let nombre = document.getElementById('nombres');
let apellidos = document.getElementById('apellidos')
let correo = document.getElementById('correo')
let telefono = document.getElementById('telefono')
let form1 = document.getElementById('form_user')
let form2 = document.getElementById('form_coti')

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
        saludo.innerHTML = 'Hola ' + this.Nombre; + ' como estas?, gracias por cotizar con nosotros'
        
        
    }
}






let eleRenders = ['Numero de renders', 'Calidad de reders', 'Lugar de renders', 'Total de renders']

let calcular = document.getElementById('calcular')

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
       
        nR.innerHTML = 'El total para ' + this.numeroRenders + '  renders, ubicados en el ' + this.intOEx + ' con calidad ' + this.calidad + ' es de ' + total
    }
}







calcular.onclick = function(){
    var nuevoUsusario = new Usuario(nombre.value, apellidos.value, correo.value, telefono.value )
    nuevoUsusario.newUser();
    nuevoUsusario.saludar();
    var cotiza = new Cotizador(numRender.value, lugRender.value, calRender.value)
    cotiza.cali();
    sessionStorage.Nombre = nombre.value;
    sessionStorage.Apellido = apellidos.value;
    sessionStorage.Correo = correo.value;
    sessionStorage.Telefono = telefono.value
    console.log(sessionStorage.Nombre)
    console.log(sessionStorage.Apellido)
    console.log(sessionStorage.Correo)
    console.log(sessionStorage.Telefono)
    form1.style.display = 'none'
    form2.style.display = 'none'

    
   
}




