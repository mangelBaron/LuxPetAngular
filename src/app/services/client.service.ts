import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }


  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8090/cliente/all');
  }


  findById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>('http://localhost:8090/cliente/find/'+ id);
  }

  deleteById(id:number){
    this.http.delete('http://localhost:8090/cliente/delete/'+ id).subscribe();
  }

  addClient(cliente: Cliente){
    this.http.post('http://localhost:8090/cliente/add', cliente).subscribe();
  }
}
