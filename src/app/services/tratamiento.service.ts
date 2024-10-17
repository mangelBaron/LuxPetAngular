import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Droga } from '../model/droga';
import { Tratamiento } from '../model/tratamiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamiento/all');
  }

  findById(id: number): Observable<Tratamiento>{
    return this.http.get<Tratamiento>('http://localhost:8090/tratamiento/find/'+ id);
  }

  deleteById(id:number){
    this.http.delete('http://localhost:8090/tratamiento/delete/'+ id).subscribe();
  }

  addTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
    return this.http.post<Tratamiento>('http://localhost:8090/tratamiento/add', tratamiento);
  }

  updateTratamiento(id: number, tratamiento: Tratamiento) :Observable<Tratamiento>{
    return this.http.put<Tratamiento>('http://localhost:8090/tratamiento/update/' + id, tratamiento);
  }


}
