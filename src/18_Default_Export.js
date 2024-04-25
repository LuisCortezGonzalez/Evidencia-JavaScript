import {carros, carroPorNombre} from './data/carros'

const carro = [
    {
        id: 1,
        marca: 'Seat',
        modelo: 'Fr',
        anio: 2018,
        nombre: 'Leon',
        client:{
            name: 'Luis',
            apellido: 'Cortez'
        }
    },
    {
        id: 2,
        marca: 'Cupra',
        modelo: 'Excelence',
        anio: 2018,
        nombre: 'Arona',
        client:{
            name: 'Luis',
            apellido: 'Cortez'
        }
    },
    {
        id: 3,
        marca: 'Seat',
        modelo: 'cupra',
        anio: 2018,
        nombre: 'Formentor',
        client:{
            name: 'Luis',
            apellido: 'Cortez'
        }
    },
    {
        id: 4,
        marca: 'cupra',
        modelo: 'Electrico',
        anio: 2018,
        nombre: 'Moto',
        client:{
            name: 'Luis',
            apellido: 'Cortez'
        }
    },
    {
        id: 5,
        marca: 'Seat',
        modelo: 'Fr',
        anio: 2018,
        nombre: 'Leon',
        client:{
            name: 'Luis',
            apellido: 'Cortez'
        }
    }
];

console.log(carro);


//const carroPorNombre = carro.find(i => i.nombre === 'Formentor')

console.log('Carro por Nombre: ');
console.log(carroPorNombre('Luis'))

const carroFilter = carro.filter(i => i.id == 1)
console.log(carroFilter);

const carroSome = carro.some(i => i.client.name === 'Luis')

console.log(carroSome);