import { Droga } from "./droga";

export interface Dashboard {
    veterinariosActivos: number;
    veterinariosInactivos: number;
    mascotasActivas: number;
    mascotasInactivas: number;
    drogas ?: Droga[];
}
