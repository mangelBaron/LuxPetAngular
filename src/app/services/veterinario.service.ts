import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinario } from '../model/veterinario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(
    private http: HttpClient
  ) { }


  findAll(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>('http://localhost:8090/veterinario/all');
  }


  findById(id: number): Observable<Veterinario>{
    return this.http.get<Veterinario>('http://localhost:8090/veterinario/find/'+ id);
  }

  deleteById(id:number){
    this.http.delete('http://localhost:8090/veterinario/delete/'+ id).subscribe();
  }

  addVeterinario(veterinario: Veterinario): Observable<Veterinario> {
    return this.http.post<Veterinario>('http://localhost:8090/veterinario/add', veterinario);
  }

  
  updateVeterinario(id: number, veterinario: Veterinario) :Observable<Veterinario>{
    return this.http.put<Veterinario>('http://localhost:8090/veterinario/update/' + id, veterinario);
  }











}
