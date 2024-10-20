import { Component } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { Cliente } from '../../../model/cliente';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-client',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, FormsModule],
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

  filteredClientes: Cliente[] = [];  // Lista filtrada
  searchCliente: string = '';

  ngOnInit(): void {
    this.clientService.findAll().subscribe(
      (clients) => {
        this.clientList = clients;
        this.filteredClientes = clients;
      },
      (error) => {
        console.error('Error al obtener clientes:', error);
      }
    );
  }
  

  mostrarCliente(client: Cliente){
    this.selectedClient = client;
  }


  agregarCliente(client: Cliente){
    this.clientList.push(client);
    this.clientService.addCliente(client);
  }

  eliminarCliente(client: Cliente){
      var index = this.clientList.indexOf(client);
      this.clientList.splice(index,  1);
      if (client.id !== undefined) {
        this.clientService.deleteById(client.id);
      }
    }

    filterClientes(): void {
      this.filteredClientes = this.clientList.filter(cliente =>
        cliente.nombre.toLowerCase().includes(this.searchCliente.toLowerCase()) ||
        cliente.cedula.toLowerCase().includes(this.searchCliente.toLowerCase())
      );
    }
}
