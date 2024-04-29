"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var navegation_1 = require("./navegation");
var planets_1 = require("./planets");
var events_1 = require("./events");
var userInterface_1 = require("./userInterface");
function simularEventoAleatorio() {
    var eventosPosibles = [
        new events_1.Evento('Tormenta de asteroides', -20, -10, -15),
        new events_1.Evento('Fallo en los sistemas de navegación', -15, 0, -20),
        new events_1.Evento('Invasión alienígena', -50, -30, -40),
    ];
    var eventoAleatorioIndex = Math.floor(Math.random() * eventosPosibles.length);
    return eventosPosibles[eventoAleatorioIndex];
}

function juegoExploracionEspacial() {
    var nave = {
        salud: 100,
        capacidadCarga: 1000,
        velocidad: 50, 
    };
    console.log('¡Bienvenido al Simulador de Exploración Espacial!');
 
    while (true) {
        console.log('\n============================');
        console.log('¿Qué tal novato, ayudame abordar esta experiencia unica en el espacio');
        console.log('Eres un analista del espacio; dime ¿Qué debo hacer?');
        console.log('1. Explorar nuevo planeta');
        console.log('2. Recolectar recursos');
        console.log('3. Ver estado de la nave');
        console.log('4. Salir del juego');
        var opcion = (0, userInterface_1.capturarEntradaNumero)('Ingresa el número de la opción: ', 1, 4);
        switch (opcion) {
            case 1:
                var nombrePlaneta = (0, userInterface_1.capturarEntradaString)('Introduce el nombre del planeta: ');
                var nuevoPlaneta = new planets_1.Planeta(nombrePlaneta, navegation_1.TipoRecurso.Agua, navegation_1.Peligro.Tormenta); // Ejemplo, puedes personalizar esto
                console.log("Has descubierto un nuevo planeta: ".concat(nuevoPlaneta.nombre));
                break;
            case 2:
                var cantidadRecursos = (0, userInterface_1.capturarEntradaNumero)('Introduce la cantidad de recursos a recolectar: ', 1, 100);
                if (nave.capacidadCarga >= cantidadRecursos) {
                    nave.capacidadCarga -= cantidadRecursos;
                    console.log("Has recolectado ".concat(cantidadRecursos, " unidades de recursos."));
                }
                else {
                    console.log('No hay suficiente espacio de carga en la nave.');
                }
                break;
            case 3:
                console.log("Estado de la nave:");
                console.log("- Salud: ".concat(nave.salud));
                console.log("- Capacidad de Carga: ".concat(nave.capacidadCarga));
                console.log("- Velocidad: ".concat(nave.velocidad));
                break;
            case 4:
                console.log('Gracias por jugar. ¡NOS VEMOS AL INFITO Y MAS ALLA!');
                return; 
            default:
                console.log('Opción no válida. Por favor, selecciona una opción correcta.');
        }
    }
}
juegoExploracionEspacial();
