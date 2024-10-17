import { HttpClient } from '@angular/common/http';
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

  addPet(pet: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>('http://localhost:8090/mascota/add', pet);
}

  updatePet(id: number, pet: Mascota): Observable<Mascota> {
    return this.http.put<Mascota>('http://localhost:8090/mascota/update/'+ id, pet.id);
  }

}