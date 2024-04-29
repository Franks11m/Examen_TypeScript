"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capturarEntradaNumero = exports.capturarEntradaString = void 0;
var readlineSync = require("readline-sync");
function capturarEntradaString(mensaje) {
    return readlineSync.question(mensaje);
}
exports.capturarEntradaString = capturarEntradaString;
function capturarEntradaNumero(mensaje, min, max) {
    var entrada;
    var numero;
    do {
        entrada = readlineSync.question(mensaje);
        numero = parseInt(entrada);
        if (isNaN(numero) || numero < min || numero > max) {
            console.log('Error: Ingresa un número válido dentro del rango.');
        }
    } while (isNaN(numero) || numero < min || numero > max);
    return numero;
}
exports.capturarEntradaNumero = capturarEntradaNumero;
