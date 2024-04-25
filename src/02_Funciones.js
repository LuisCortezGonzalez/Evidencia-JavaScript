
function obtenerInfo(name = 'Luis', apellido = 'Gnz'){
    const info = `${name} ${apellido}`;

    return info;
}

const info = obtenerInfo('Eduardo', 'Cortez');

console.log(info);