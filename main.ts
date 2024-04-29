
import { NaveEspacial, TipoRecurso, Peligro } from './navegation';
import { Planeta } from './planets';
import { Evento } from './events';
import { capturarEntradaString, capturarEntradaNumero } from './userInterface';


function simularEventoAleatorio(): Evento {
    const eventosPosibles: Evento[] = [
        new Evento('Tormenta de asteroides', -20, -10, -15),
        new Evento('Fallo en los sistemas de navegación', -15, 0, -20),
        new Evento('Invasión alienígena', -50, -30, -40),
        
    ];

    const eventoAleatorioIndex = Math.floor(Math.random() * eventosPosibles.length);
    return eventosPosibles[eventoAleatorioIndex];
}

function juegoExploracionEspacial(): void {

     const nave: NaveEspacial = {
        salud: 100,
        capacidadCarga: 1000,
        velocidad: 50, 
    };

    console.log('¡Bienvenido al Simulador de Exploración Espacial!');

    while (true) {
        console.log('¿Qué tal novato, ayudame abordar esta experiencia unica en el espacio');
        console.log('Eres un analista del espacio; dime ¿Qué debo hacer?');
        console.log('1. Explorar nuevo planeta');
        console.log('2. Recolectar recursos');
        console.log('3. Ver en que estado esta la nave');
        console.log('4. Salir del juego');
        const opcion = capturarEntradaNumero('Ingresa el número de la opción: ', 1, 4);

        switch (opcion) {
            case 1:

                const nombrePlaneta = capturarEntradaString('Introduce el nombre del planeta: ');
                const nuevoPlaneta = new Planeta(nombrePlaneta, TipoRecurso.Agua, Peligro.Tormenta); // Ejemplo, puedes personalizar esto
                console.log(`Has descubierto un nuevo planeta: ${nuevoPlaneta.nombre}`);
                break;
            case 2:
              
                const cantidadRecursos = capturarEntradaNumero('Introduce la cantidad de recursos a recolectar: ', 1, 100);
                if (nave.capacidadCarga >= cantidadRecursos) {
                    nave.capacidadCarga -= cantidadRecursos;
                    console.log(`Has recolectado ${cantidadRecursos} unidades de recursos.`);
                } else {
                    console.log('No hay suficiente espacio de carga en la nave.');
                }
                break;
            case 3:
        
                console.log(`Estado de la nave:`);
                console.log(`- Salud: ${nave.salud}`);
                console.log(`- Capacidad de Carga: ${nave.capacidadCarga}`);
                console.log(`- Velocidad: ${nave.velocidad}`);
                break;
            case 4:
          
                console.log('Gracias por jugar. ¡NOS VEMOS LUEGO!');
                return; 
            default:
                console.log('Opción no válida. Por favor, selecciona una opción correcta.');
        }
    }
}

juegoExploracionEspacial();
