let nombre = localStorage.getItem('Nombre');
let apellido = localStorage.getItem('Apellido')
let correo = localStorage.getItem('Correo')
let telefono = localStorage.getItem('Telefono')

let usuario = {
    'Nombre': nombre,
    'Apellido': apellido,
    'Correo': correo,
    'Telefono': telefono
}

console.log(usuario['Nombre'] + ' ' + usuario['Apellido']);


let saludar = document.getElementById('saludo')
saludar.innerHTML = 'Hola ' + usuario['Nombre']

let eleRenders = ['Numero de renders', 'Calidad de reders', 'Lugar de renders', 'Total de renders']

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
        alert(
            eleRenders[0]+': '+this.numeroRenders+', '+
            eleRenders[2]+': '+this.intOEx+', '+
            eleRenders[1]+': '+ this.calidad+', '+
            eleRenders[3]+': '+total
        ) 
    }
}

var cotiza = new Cotizador(prompt('Ingrese el numero de render'), prompt('interior o exterior'), prompt('Calidad alta, media o baja'))
cotiza.cali()

