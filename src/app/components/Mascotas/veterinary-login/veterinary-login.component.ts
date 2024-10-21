import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../../../model/loginrequest';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-veterinary-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './veterinary-login.component.html',
  styleUrl: './veterinary-login.component.css'
})
export class VeterinaryLoginComponent {
  cedula: string = '';
  password: string = '';

  usuario = {
    cedula: '',
    password: ''
  };
  error: string = '';

  constructor(
    private http: HttpClient,
     private router: Router,
    private loginService: LoginService
    ) {}

    verificarLogin(): void {
      this.loginService.loginVeterinario(this.usuario).subscribe(
        (vet) => {
          if (vet) {
            console.log('Login exitoso', vet);
            this.router.navigate(['vet/pets']);
          } else {
            console.error('Error al iniciar sesión', vet);
            this.error = 'Error al iniciar sesión';
          }
        },
        (error) => {
          this.error = 'Error ';
          console.error('Error al iniciar sesión', error);
        }
      );
    }
}
