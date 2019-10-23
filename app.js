const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors/safe');

let command = argv._[0];

switch (command) {
    case 'crear':
        console.log('Crear');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Listar');
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log(colors.green('===== Por Hacer ====='));
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log(colors.green('=====================\n'));
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(colors.red(actualizado));
        break;
    case 'borrar':
        console.log('borrar');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(colors.red(borrado));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}