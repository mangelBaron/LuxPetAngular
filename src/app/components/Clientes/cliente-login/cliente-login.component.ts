import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { ClientService } from '../../../services/client.service';
import { User } from '../../../model/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-cliente-login',
  standalone: true, 
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.css']
})
export class ClienteLoginComponent {

  constructor(
    private clientService : ClientService,
    private http: HttpClient,
    private router : Router
  ){}

  cedula : string = '';

  formUser: User = {
    cedula: '',
    password: ''
  }
  
  error : string = '';
  cliente : any;

  verificarLogin(cedula: string) {
    this.http.post('http://localhost:8090/cliente/login', { cedula }, { responseType: 'text' })
      .subscribe(
        response => {
          if (this.isJWT(response)) {
            console.log('Inicio de sesión exitoso', response);
            this.router.navigate(['/client/portal'], { state: { cliente: this.cliente } });
          } else {
            try {
              const jsonResponse = JSON.parse(response);
              console.log('Inicio de sesión exitoso', jsonResponse);
              this.router.navigate(['/client/portal'], { state: { cliente: this.cliente } });
            } catch (e) {
              console.error('Error al analizar la respuesta:', e);
              alert('Ocurrió un error al procesar la respuesta del servidor.');
            }
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Error al iniciar sesión:', error);
          if (error.status === 401) {
            alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
          } else {
            alert('Ocurrió un error. Por favor, inténtelo de nuevo más tarde.');
          }
        }
      );
  }
  
  isJWT(response: string): boolean {
    const jwtPattern = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;
    return jwtPattern.test(response);
  }
}