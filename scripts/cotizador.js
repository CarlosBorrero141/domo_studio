
let numRender = document.getElementById('numeroRenders').value;
let lugRender = document.getElementById('lugarRenders').value;
let calRender = document.getElementById('calidadRenders').value;
let saludo = document.getElementById('saludo');
let nR = document.getElementById('nR');
let lR = document.getElementById('lR');
let cR = document.getElementById('cR');
let resultado = document.getElementById('total');







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
       
        nR.innerHTML = 'Su total es de: ' + total;
    }
}







calcular.onclick = function(){
    var cotiza = new Cotizador(numRender, lugRender, calRender)
    cotiza.cali();
    
}
