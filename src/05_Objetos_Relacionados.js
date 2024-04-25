
const carro = {
    id: 1,
    nombre: 'LaFerrari',
    date: new Date(),
    marca:{
        id: 1,
        nombre: 'Ferrari',
        ubicacion: 'Europa',
        age: 100
    },
    costo: 1000000,
    saludo: function(){
        return `Hola ${this.marca.nombre} ${this.nombre}`;
    }
}

//carro.nombre = 'F40'
carro.costo = 1500000

console.log(carro);

const salu = carro.saludo();
console.log(salu);