import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client-form',
  standalone: true,
  imports: [],
  templateUrl: './add-client-form.component.html',
  styleUrl: './add-client-form.component.css'
})
export class AddClientFormComponent {


  @Output()
  addClientEvent = new EventEmitter<Cliente>();

  @Output()
  ocultarFormularioEvent = new EventEmitter<boolean>();

  sendClient!: Cliente;

  formClient: Cliente = {
    id: 0,
    cedula: '',
    nombre: '',
    correo: '',
    celular: '',
    mascotas: []
  };


/* 



*/

mostrarForm: boolean = false;

selectedClient!: Cliente;

clientList!: Cliente[];

constructor(
private clientService: ClientService
){}


  addClientForm(form:any){
    console.log(this.formClient);

    this.sendClient = Object.assign({}, this.formClient);

    this.addClientEvent.emit(this.sendClient);

  }

  addClient(form:any){
    this.sendClient  = Object.assign({}, this.formClient);

    this.addClientEvent.emit(this.sendClient);
  }


  cancelar(){
    this.ocultarFormularioEvent.emit(false);
  }



}
