const csv = require('csv-parser');
const fs = require('fs');
const http = require('http');
const colors = require("colors")
let datosCSV = [];
let resultado = [];
const leerDatos = (path, cod, year, guardar) => {

    let n = 0;
    fs.createReadStream(path)
        .pipe(csv({ headers: false }))
        .on('data', (row) => {
            if (n > 4) {
                datosCSV.push(row);
            } else {
                delete row;
                n++;
            }
        })
        .on('end', () => {
            data = arreglar(cod, year);
            imprimir(data, cod, year);
            if (guardar == 1) {
                guardarDatos(data, cod, year);
            }

        });
}
const arreglar = (cod, year) => {
    var arr = datosCSV.map(item => {
        return {
            nombre_ciudad: item[0],
            codigo_ciudad: item[1],
            year: {
                '1960': item[4],
                '1961': item[5],
                '1962': item[6],
                '1963': item[7],
                '1964': item[8],
                '1965': item[9],
                '1966': item[10],
                '1967': item[11],
                '1968': item[12],
                '1969': item[13],
                '1970': item[14],
                '1971': item[15],
                '1972': item[16],
                '1973': item[17],
                '1974': item[18],
                '1975': item[19],
                '1976': item[20],
                '1977': item[21],
                '1978': item[22],
                '1979': item[23],
                '1980': item[24],
                '1981': item[25],
                '1982': item[26],
                '1983': item[27],
                '1984': item[28],
                '1985': item[29],
                '1986': item[30],
                '1987': item[31],
                '1988': item[32],
                '1989': item[33],
                '1990': item[34],
                '1991': item[35],
                '1992': item[36],
                '1993': item[37],
                '1994': item[38],
                '1995': item[39],
                '1996': item[40],
                '1997': item[41],
                '1998': item[42],
                '1999': item[43],
                '2000': item[44],
                '2001': item[45],
                '2002': item[46],
                '2003': item[47],
                '2004': item[48],
                '2005': item[49],
                '2006': item[50],
                '2007': item[51],
                '2008': item[52],
                '2009': item[53],
                '2010': item[54],
                '2011': item[55],
                '2012': item[56],
                '2013': item[57],
                '2014': item[58],
                '2015': item[59],
                '2016': item[60],
                '2017': item[61],
                '2018': item[62],
                '2019': item[63],
                '2020': item[64]
            }

        };
    });
    buscarDato(arr, cod, year);
    return arr;
}

const buscarDato = (data, cod, year) => {
    pais = data.find(obj => obj.codigo_ciudad == cod);

    let datoPais = pais.year[year];

    resultado.push({ valor: datoPais });

}

const imprimir = (data, cod, year) => {
    pais = data.find(obj => obj.codigo_ciudad == cod);
    console.log("**************************************************************************".magenta);
    console.log("Datos: Personas que usan Internet (% de la población)".black.bgYellow);
    console.log(`Pais: ${pais.nombre_ciudad}`.green);
    console.log(`Año: ${year}`.green);
    console.log(`Valor: ${resultado[0].valor}`.blue);
    console.log("**************************************************************************".magenta);
}
const guardarDatos = (data, cod, year) => {
    pais = data.find(obj => obj.codigo_ciudad == cod);
    let datos = `Datos:	Personas que usan Internet (% de la población)\nPais: ${pais.nombre_ciudad}\nAño: ${year}\nValor: ${resultado[0].valor}\n`;
    let name = `./resultados/${cod}-${year}.txt`;
    fs.writeFile(name, datos, (err) => {
        if (err) {
            console.log("Error al guardar el archivo", err);
        }
    })
    return true;
}

module.exports = { leerDatos }