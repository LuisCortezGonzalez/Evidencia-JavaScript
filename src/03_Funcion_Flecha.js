
const obtenerInfo = (name = 'Luis', apellido = 'Gnz') => `${name} ${apellido}`;
const sum = (a = 0, b = 0) => a + b;

const info = obtenerInfo('Eduardo', 'Cortez');

console.log(info);
console.log(sum(20,10));