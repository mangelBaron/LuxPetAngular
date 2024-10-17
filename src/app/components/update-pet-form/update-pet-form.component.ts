import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { Cliente } from '../../model/cliente';


@Component({
  selector: 'app-add-pet-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-pet-form.component.html',
  styleUrl: './update-pet-form.component.css'
})
export class UpdatePetFormComponent {
  @Output()
  agregarMascotaEvent = new EventEmitter<Mascota>();

  petList!: Mascota[];
  clientList!: Cliente[];


  formularioMascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    foto: '',
    enfermedad: '',
    estado: '',
    cliente: undefined,
    veterinario: undefined,
    tratamiento: undefined
  };

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private petService: PetService,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit de UpdatePetFormComponent");

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!isNaN(id)) {
        this.petService.findById(id).pipe(
          mergeMap(petInfo => {
            this.formularioMascota = petInfo;
            return this.petService.findClientPet(this.formularioMascota.clienteId);
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
        console.error('ID de mascota no válido');
      }
    });
  }

  guardarCambios(): void {
    this.petService.updatePet(this.formularioMascota.id, this.formularioMascota).subscribe(
      () => {
        this.router.navigate(['/mascotas']);
      },
      error => {
        console.error('Error al actualizar la mascota', error);
      }
    );
  }

}

