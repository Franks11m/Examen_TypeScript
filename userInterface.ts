
import * as readlineSync from 'readline-sync';

export function capturarEntradaString(mensaje: string): string {
    return readlineSync.question(mensaje);
}

export function capturarEntradaNumero(mensaje: string, min: number, max: number): number {
    let entrada: string;
    let numero: number;

    do {
        entrada = readlineSync.question(mensaje);
        numero = parseInt(entrada);

        if (isNaN(numero) || numero < min || numero > max) {
            console.log('Error: Ingresa un número válido dentro del rango.');
        }
    } while (isNaN(numero) || numero < min || numero > max);

    return numero;
}
