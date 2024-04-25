
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
    inventarios:[
        {
            id: 1,
            color: 'Rojo',
            cantidad: 5,
            precio: 11000000
        },
        {
            id: 1,
            color: 'Blanco',
            cantidad: 2,
            precio: 10000000
        },
        {
            id: 1,
            color: 'Anarillo',
            cantidad: 5,
            precio: 11050000
        }
    ],
    totalInventario: function(){
        let total = 0;
        this.inventarios.forEach(inventario =>{
            total = total + inventario.precio*inventario.precio;
        });
        return total;
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
console.log(carro.totalInventario());