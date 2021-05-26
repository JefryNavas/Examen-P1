const { argv } = require("./config/yargs");
const colors = require("colors")
const { leerDatos } = require("./buscador/buscar")
let comando = argv._[0];

switch (comando) {
    case "mostrar":
        leerDatos(argv.archivo, argv.pais, argv.anio);
        break;
    case "guardar":
        leerDatos(argv.archivo, argv.pais, argv.anio, 1);
        break;
    default:
        console.log("Comando no válido");
        break;
}