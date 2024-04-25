
const alumnos = ['monse', 'mau', 'gustavo', 'luis', 'maria', 'juan'];

const [nom1, nom2, nom3, ...nombres] = alumnos;

console.log(nom1,nom2,nom3, ...nombres);