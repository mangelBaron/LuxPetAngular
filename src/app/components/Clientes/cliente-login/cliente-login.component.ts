import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login.service';


@Component({
  selector: 'app-cliente-login',
  standalone: true, 
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.css']
})
export class ClienteLoginComponent {

  constructor(
    private loginService : LoginService,
    private router : Router
  ){}

  cedula : string = '';
  
  error : string = '';

  verificarLogin(): void {
    this.loginService.loginCliente(this.cedula).subscribe(
      (cliente) => {
        if (cliente) {
          console.log('Cliente encontrado:', cliente);
          this.router.navigate(['/client/portal'], { state: { cliente: cliente } });
        } else {
          console.error('Cliente no encontrado - ' + this.cedula + " ", cliente);

          
          this.error = 'Cliente no encontrado';
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:' + this.cedula + " ", error);
        this.error = 'Error al iniciar sesión';
      }
    );
  }
}