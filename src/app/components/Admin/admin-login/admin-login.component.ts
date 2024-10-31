import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
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
      this.loginService.loginAdmin(this.usuario).subscribe(
        (admin) => {
          if (admin) {
            console.log('Login exitoso', admin);
            this.router.navigate(['/admin']);
          } else {
            console.error('Error al iniciar sesión', admin);
            this.error = 'Error al iniciar sesión';
          }
        },
        (error) => {
          this.error = 'Error, verifique sus credenciales';
          console.error('Error al iniciar sesión', error);
        }
      );
    }
}
