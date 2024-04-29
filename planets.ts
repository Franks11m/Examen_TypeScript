import { TipoRecurso, Peligro } from './navegation';

export class Planeta {
    nombre: string;
    recurso: TipoRecurso;
    peligro: Peligro;

    constructor(nombre: string, recurso: TipoRecurso, peligro: Peligro) {
        this.nombre = nombre;
        this.recurso = recurso;
        this.peligro = peligro;
    }
}
