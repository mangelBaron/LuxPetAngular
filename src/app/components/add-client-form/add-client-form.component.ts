import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-client-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-client-form.component.html',
  styleUrl: './add-client-form.component.css'
})
export class AddClientFormComponent {


  sendClient!: Cliente;

  formularioCliente: Cliente = {
    id: 0,
    cedula: '',
    nombre: '',
    correo: '',
    celular: '',
    mascotas: []
  };


constructor(
private clientService: ClientService,
private router: Router,
private route: ActivatedRoute
){}



crearCliente(): void {
  this.clientService.addCliente(this.formularioCliente).subscribe(
    (response) => {
      console.log('Cliente creado con éxito', response);
      this.router.navigate(['/cliente/all']);
    },
    (error) => {
      console.error('Error al crear el cliente', error);
    }
  );
}


}
