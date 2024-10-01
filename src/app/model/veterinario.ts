import { Mascota } from "./mascota";
export interface Veterinario {
    id?: number;
    cedula: string;
    contrasenia: string;
    especialidad: string;
    foto: string;
    numAtenciones: number;
    nombre: string;
    mascotas: Mascota[];
}
