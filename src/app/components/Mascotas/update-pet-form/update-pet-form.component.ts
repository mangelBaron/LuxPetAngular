import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from '../../../model/mascota';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../../services/pet.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../../services/client.service';
import { Cliente } from '../../../model/cliente';
import { mergeMap } from 'rxjs';


@Component({
  selector: 'app-update-pet-form',
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

  clienteSeleccionado: string = '';


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
    console.log("ngOnInit de ClientFormPageComponent");

    this.clientService.findAll().subscribe(
      (clients) => {
        this.clientList = clients;
      },
      (error) => {
        console.error('Error al obtener clientes:', error);
      }
    );

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.petService.findById(id).subscribe(
          (PetInfo) =>{
            this.formularioMascota = PetInfo;
          },
          (error) =>{
            console.error('Error al obtener el cliente', error);
          }
        );
    });
  }
          
  

  actualizarMascota(mascota: Mascota, cedula: string): void {
    console.log('Mascota a actualizar, cedula del cliente: ', cedula +' Mascota del cliente:', mascota);

    this.petService.updatePet(this.formularioMascota.id, mascota, cedula).subscribe(
      (response) => {
        console.log('Cliente actualizado con éxito', response);
        this.router.navigate(['vet/pets']);
      },
      (error) => {
        console.error('Error al actualizar el cliente', error);
        this.router.navigate(['vet/pets']);
      }
    );
  } 

}

