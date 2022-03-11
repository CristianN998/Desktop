// Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.

var objecto = {}; // Object Literal Syntax

var miAuto = {
    marca: "Toyota", // key - value
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {
        // Metodo de un objeto (una función dentro de un objeto)
        return `Auto ${this.modelo} ${this.annio}`;
    },
};
miAuto.detallesDelAuto();

miAuto.annio;
miAuto.modelo;

miAuto.detallesDelAuto();

// Función constructora

function auto(marca, modelo, annio) {
    // Creas una función con los parametros que va a recibir,
    this.marca = marca; // Utilizamos el "this" para asignar valores a las propiedades del objeto
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);

var myCar = {
    brand: ["Toyota", "Tesla", "Renault", "Chevrolet", "Hyundai", "Kia"],
    year: ["2017", "2019", "2018", "2021", "2020", "2022"],
    color: ["Red", "Green", "Blue", "Black", "White", "Yellow"],
    car: [],
    makeCar: function(brand, year, color) {
        this.brand = brand;
        this.year = year;
        this.color = color;
    },
};
for (i = 0; i < myCar.brand.length; i++) {
    var newCar = new myCar.makeCar(myCar.brand[i], myCar.year[i], myCar.color[i]);
    myCar.car.push(myCar.brand[i], myCar.year[i], myCar.color[i]);
    console.log(newCar);
}

function auto(MARCA, MODELO, ANNIO) {
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}
var autos = [];
for (let i = 0; i < 30; i++) {
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto(marca, modelo, annio));
}

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}