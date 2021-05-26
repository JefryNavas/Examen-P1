const archivo = {
    demand: true,
    alias: "f",
    desc: "Permite establecer el path del archivo CSV que contiene los datos a analizar"
}
const pais = {
    demand: true,
    alias: "c",
    desc: "Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3. El valor por defecto es “ECU”",
    default: "ECU"
}

const anio = {
    alias: "y",
    desc: "Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 1960.",
    default: 1960
}


const argv = require("yargs")
    .command("mostrar", "Este comando imprime en pantalla el resultado de la búsqueda (utilizando colores).", {
        archivo,
        pais,
        anio
    })
    .command("guardar", "Este comando genera un archivo de texto con el resultado de la búsqueda.", {
        archivo,
        pais,
        anio
    })
    .help()
    .argv;

module.exports = { argv }