import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Droga } from '../model/droga';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    // 'http://localhost:8090/dashboard'  

  constructor(
    private http: HttpClient
  ){}

  getVentasTotales(){
    return this.http.get('http://localhost:8090/dashboard/ventasTotales');
  }

  getVeterinariosActivos(){
    return this.http.get('http://localhost:8090/dashboard/nVetActivos');
  }

  getMascotasActivas(){
    return this.http.get('http://localhost:8090/dashboard/nMascotasActivas');
  }

  getMascotasInactivas(){
    return this.http.get('http://localhost:8090/dashboard/nMascotasInactivas');
  }

  getGanacias(){
    return this.http.get('http://localhost:8090/dashboard/gananciaTotales');
  }

  getTratamientos(){
    return this.http.get('http://localhost:8090/dashboard/nTratamientos');
  }

  getTopDrogas(): Observable<Droga>{
    return this.http.get<Droga>('http://localhost:8090/dashboard/top3Drogas');
  }

  getTratamientosPorDroga(){
    return this.http.get('http://localhost:8090/dashboard/nTratamientosPorDroga');
  }




  
}
