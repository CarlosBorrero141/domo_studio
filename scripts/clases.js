class Usuario {
  constructor(nombre, apellidos, correo, telefono) {
    this.Nombre = nombre;
    this.Apellido = apellidos;
    this.correo = correo;
    this.telefono = parseInt(telefono);
  }

  newUser = function () {
    let userJson = {
      Nombre: this.Nombre,
      Apellido: this.Apellido,
      Correo: this.correo,
      Telefono: this.telefono,
    };
    console.log(userJson);
    localStorage.newU = JSON.stringify(userJson);
    console.log(localStorage.newU);
    return userJson;
  };

  saludar = function () {
    saludo.text(
      "Hola " + this.Nombre + " como estas?, gracias por cotizar con nosotros"
    );
  };
}

class Cotizador {
  constructor(numeroRenders, intOEx, calidad) {
    this.numeroRenders = parseInt(numeroRenders);
    this.intOEx = intOEx.toLowerCase();
    this.calidad = calidad.toLowerCase();
  }

  getCalidad = function () {
    let precioCalidad;
    if (this.calidad == "alta") {
      precioCalidad = 300000;
    } else if (this.calidad == "media") {
      precioCalidad = 200000;
    } else if (this.calidad == "baja") {
      precioCalidad = 100000;
    }
    console.log(precioCalidad);
    return precioCalidad;
  };

  getLugar = function () {
    let precioLugar;
    if (this.intOEx == "exterior") {
      precioLugar = 200000;
    } else if (this.intOEx == "interior") {
      precioLugar = 150000;
    }
    console.log(precioLugar);
    return precioLugar;
  };

  getTotal = function () {
    let total = (this.getLugar() + this.getCalidad()) * this.numeroRenders;
    console.log(total);
    return total;
  };

  cali = function () {
    let total = this.getTotal();
    localStorage.cotizacion = total
    console.log(localStorage.cotizacion)
    nR.text(
      "El total para " +
        this.numeroRenders +
        "  renders, ubicados en el " +
        this.intOEx +
        " con calidad " +
        this.calidad +
        " es de " +
        total
    );

    
  };
}
