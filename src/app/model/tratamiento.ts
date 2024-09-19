import { Droga } from "./droga";
import { Mascota } from "./mascota";
export interface Tratamiento {
    id?: number;
    fecha: string;
    droga?: Droga;
    mascota?: Mascota;
}
