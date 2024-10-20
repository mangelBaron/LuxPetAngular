import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../model/mascota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private http: HttpClient
  ) { }


  findById(id: number): Observable<Mascota>{
    return  this.http.get<Mascota>('http://localhost:8090/mascota/find/'+ id);

  }

  findAll(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/mascota/all');
  }



  findClientPet(id: number): Observable<Mascota[]>{
    return this.http.get<Mascota[]>('http://localhost:8090/mascota/findClient/'+ id);
  }

  findVetPet(id: number): Observable<Mascota[]>{
    return this.http.get<Mascota[]>('http://localhost:8090/mascota/findVet/'+ id);
  }


  deleteById(id: number) {
    return this.http.delete('http://localhost:8090/mascota/delete/' + id).subscribe();
  }

  addPet(pet: Mascota, cedula: string): Observable<Mascota> {
    const url = 'http://localhost:8090/mascota/add';
    const params = new HttpParams().set('cedula', cedula);
    return this.http.post<Mascota>(url, pet, { params });
  }
  
  updatePet(id: number, mascota: Mascota, clienteSeleccionado: string): Observable<Mascota> {
    const url = 'http://localhost:8090/mascota/update/'+id;
    const params = new HttpParams().set('clienteSeleccionado', clienteSeleccionado);
    return this.http.put<Mascota>(url, mascota, { params });
}

}