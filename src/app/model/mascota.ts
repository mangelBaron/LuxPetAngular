import { Cliente } from "./cliente";
import { Veterinario } from "./veterinario";
import { Tratamiento } from "./tratamiento";
export interface Mascota {
    id: number;
    nombre: string;
    raza: string;
    edad: number;
    peso: number;
    foto: string;
    enfermedad: string;
    estado: string;
    cliente?: Cliente;
    veterinario?: Veterinario;
    tratamiento?: Tratamiento;
}
