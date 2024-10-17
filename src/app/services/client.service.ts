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
    console.log("findAll de ClientService");
    console.log(this.http.get<Cliente[]>('http://localhost:8090/cliente/all'));
    return this.http.get<Cliente[]>('http://localhost:8090/cliente/all');
  }


  findById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>('http://localhost:8090/cliente/find/'+ id);
  }

  deleteById(id:number) {
    this.http.delete('http://localhost:8090/cliente/delete/'+ id).subscribe();
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8090/cliente/add', cliente);
  }

  updateClient(id: number, cliente: Cliente): Observable<Cliente>{
   return this.http.put<Cliente>('http://localhost:8090/cliente/update/' + id, cliente);
  }
}
