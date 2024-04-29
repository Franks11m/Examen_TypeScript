// Interfaz de la nave espacial
export interface NaveEspacial {
    salud: number;
    capacidadCarga: number;
    velocidad: number;
}

// Enums para los tipos de recursos y peligros
export enum TipoRecurso {
    Agua,
    Mineral,
    Vegetal,
}

export enum Peligro {
    Tormenta,
    Meteoritos,
    Radiacion,
}
