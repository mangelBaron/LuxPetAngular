import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../../../model/cliente';
import { ClientService } from '../../../services/client.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-client-form',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './add-client-form.component.html',
  styleUrl: './add-client-form.component.css'
})
export class AddClientFormComponent {
  formularioCliente: Cliente = {
    id: 0,
    cedula: '',
    nombre: '',
    correo: '',
    celular: '',
    mascotas: []
  };

  errorCorreo: boolean = false; // Variable para mostrar el error de correo

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  crearCliente(): void {
    // Expresión regular para validar el formato de correo
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(this.formularioCliente.correo)) {
      // Si el correo es inválido, muestra el error y limpia los campos
      this.errorCorreo = true;
      this.limpiarCampos();
    } else {
      // Si el correo es válido, procede a crear el cliente
      this.errorCorreo = false;
      this.clientService.addCliente(this.formularioCliente).subscribe(
        (response) => {
          console.log('Cliente creado con éxito', response);
          this.limpiarCampos();
          this.router.navigate(['/clients']);
        },
        (error) => {
          console.error('Error al crear el cliente', error);
        }
      );
    }
  }

  limpiarCampos(): void {
    this.formularioCliente = {
      id: 0,
      cedula: '',
      nombre: '',
      correo: '',
      celular: '',
      mascotas: []
    };
  }
}