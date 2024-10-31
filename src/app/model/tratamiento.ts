import { Droga } from "./droga";
import { Mascota } from "./mascota";
import { Veterinario } from "./veterinario";
export interface Tratamiento {
    id: number;
    fecha: Date;
    droga?: Droga;
    mascota?: Mascota;
    veterinario?: Veterinario;
}
