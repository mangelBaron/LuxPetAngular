import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Cliente } from '../../model/cliente';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table-client',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './table-client.component.html',
  styleUrl: './table-client.component.css'
})
export class TableClientComponent {

  selectedClient!: Cliente;

  mostrarForm: boolean = false;

  clientList!: Cliente[];

  constructor(
    private clientService: ClientService
  ) { }


  ngOnInit(): void {
    this.clientService.findAll().subscribe(
      (clients) =>  this.clientList = clients
    )
  }

  mostrarCliente(client: Cliente){
    this.selectedClient = client;
  }


  agregarCliente(client: Cliente){
    this.clientList.push(client);
    this.clientService.addClient(client);
  }

  eliminarCliente(client: Cliente){
      var index = this.clientList.indexOf(client);
      this.clientList.splice(index, 1);
      if (client.id !== undefined) {
        this.clientService.deleteById(client.id);
      }
    }
}
