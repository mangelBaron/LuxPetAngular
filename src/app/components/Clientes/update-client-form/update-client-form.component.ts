import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { PetService } from '../../../services/pet.service';
import { Cliente } from '../../../model/cliente';
import { Mascota } from '../../../model/mascota';
import { mergeMap } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-client-form',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './update-client-form.component.html',
  styleUrls: ['./update-client-form.component.css']
})
export class UpdateClientFormComponent implements OnInit {
  infoClientUpdate: Cliente = {
    id: 0,
    cedula: '',
    nombre: '',
    correo: '',
    celular: '',
    mascotas: []
  };

  petList: Mascota[] = [];



  constructor(
    private clientService: ClientService,
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("ngOnInit de ClientFormPageComponent");

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.clientService.findById(id).subscribe(
          (ClienteInfo) =>{
            this.infoClientUpdate = ClienteInfo;
          },
          (error) =>{
            console.error('Error al obtener el cliente', error);
          }
        );
    });
  }
          
  

  actualizarCliente(): void {
    console.log('Cliente a actualizar', this.infoClientUpdate.id, this.infoClientUpdate);
    this.clientService.updateClient(this.infoClientUpdate.id, this.infoClientUpdate).subscribe(
      (response) => {
        console.log('Cliente actualizado con éxito', response);
        this.router.navigate(['/clients']);
      },
      (error) => {
        console.error('Error al actualizar el cliente', error);
        this.router.navigate(['/clients']);
      }
    );
  }

  cancelar(): void {
    this.router.navigate(['/clients']);
  }

}