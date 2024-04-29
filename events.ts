
export class Evento {
    nombre: string;
    impactoSalud: number;
    impactoCarga: number;
    impactoVelocidad: number;

    constructor(nombre: string, impactoSalud: number, impactoCarga: number, impactoVelocidad: number) {
        this.nombre = nombre;
        this.impactoSalud = impactoSalud;
        this.impactoCarga = impactoCarga;
        this.impactoVelocidad = impactoVelocidad;
    }
}
