import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Droga } from '../model/droga';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  constructor(
    private http: HttpClient
  ) { }


  findAll(): Observable<Droga[]> {
    return this.http.get<Droga[]>('http://localhost:8090/droga/all');
  }

  findById(id: number): Observable<Droga>{
    return this.http.get<Droga>('http://localhost:8090/droga/find/'+ id);
  }

  deleteById(id:number){
    this.http.delete('http://localhost:8090/droga/delete/'+ id).subscribe();
  }

  addDroga(droga: Droga): Observable<Droga> {
    return this.http.post<Droga>('http://localhost:8090/droga/add', droga);
  }

  updateDroga(id: number, droga: Droga) :Observable<Droga>{
    return this.http.put<Droga>('http://localhost:8090/droga/update/' + id, droga);
  }
}
