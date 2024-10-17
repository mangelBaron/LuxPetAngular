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
      if (!isNaN(id)) {
        this.clientService.findById(id).pipe(
          mergeMap(clientInfo => {
            this.infoClientUpdate = clientInfo;
            return this.petService.findClientPet(this.infoClientUpdate.id);
          })
        ).subscribe(
          pets => {
            this.petList = pets;
          },
          error => {
            console.error('Error al obtener la información del cliente o sus mascotas', error);
          }
        );
      } else {
        console.error('ID de cliente no válido');
      }
    });
  }

  guardarCambios(): void {
    if (!this.infoClientUpdate.cedula) {
      alert('El campo cedula es obligatorio');
      return;
    }

    if (!this.infoClientUpdate.correo) {
      alert('El campo correo es obligatorio');
      return;
    }

    if (!this.infoClientUpdate.celular) {
      alert('El campo celular es obligatorio');
      return;
    }

    this.clientService.updateClient(this.infoClientUpdate.id, this.infoClientUpdate).subscribe(
      () => {
        this.router.navigate(['/clients']);
      },
      error => {
        console.error('Error al actualizar el cliente', error);
      }
    );
  }

}