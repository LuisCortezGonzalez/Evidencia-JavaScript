const carros = [
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

const carroPorNombre = (nombreCliente) => {
    return carros.find(i => i.client.name === nombreCliente);
}

const carroPorId = () =>{
    return carros.filter(i => i.id == 1);
}

const findCarById = (id) =>{
    const promise = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const test = carroPorId(2);
            
            if(test){
                resolve(test);
            }else{
                reject('Error No se encontro el carro');
            }
        }, 3000);
    });

    return promise;
}

export {
    carros,
    carroPorNombre as default,
    carroPorId,
    findCarById
}