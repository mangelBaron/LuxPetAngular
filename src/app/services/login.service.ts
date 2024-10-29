import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/loginrequest';
import { Observable } from 'rxjs';
import { Veterinario } from '../model/veterinario';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  loginVeterinario(loginRequest: LoginRequest): Observable<Veterinario> {
    return this.http.post<Veterinario>('http://localhost:8090/login/loginVeterinario', loginRequest);
  }

  
  loginCliente(cedula: string): Observable<Cliente> {
    const loginRequest = { cedula: cedula };
    return this.http.post<Cliente>('http://localhost:8090/login/', loginRequest); 
  }



}
