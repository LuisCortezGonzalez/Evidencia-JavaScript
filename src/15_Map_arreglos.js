
const carro = [
    {
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

const marcasCarros = carro.map(i =>{
    return i.marca;
});

const nombresCarros = carro.map(i =>{
    return i.client.name;
});

console.log(marcasCarros);