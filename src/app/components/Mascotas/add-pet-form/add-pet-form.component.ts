import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from '../../../model/mascota';
import { Router } from '@angular/router';
import { PetService } from '../../../services/pet.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../../services/client.service';
import { Cliente } from '../../../model/cliente';


@Component({
  selector: 'app-add-pet-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-pet-form.component.html',
  styleUrl: './add-pet-form.component.css'
})
export class AddPetFormComponent {
  @Output()
  agregarMascotaEvent = new EventEmitter<Mascota>();

 

  formularioMascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    foto: '',
    enfermedad: '',
    estado: '',
  };

  clientList!: Cliente[];
  clienteSeleccionado: string = '';

  constructor(
    private router: Router, 
    private mascotaService: PetService,
    private clientService: ClientService
  ) { }


  ngOnInit(): void {
    this.clientService.findAll().subscribe(
      (clients) => {
        this.clientList = clients;
      },
      (error) => {
        console.error('Error al obtener clientes:', error);
      }
    );

    this.mascotaService.findAll().subscribe(
      (mascotas) => {
        console.log('Mascotas:', mascotas);
        if (mascotas.length > 0) {
          const maxId = Math.max(...mascotas.map(mascota => mascota.id));
          const newId = maxId + 1;
          console.log('Nuevo ID para la siguiente mascota:', newId);
          
          this.formularioMascota.id = newId;
        } else {
          console.log('No hay mascotas en la lista. El ID para la primera mascota será 1.');
          const newId = 1;
          // Asignar el newId a la siguiente mascota
          // this.nuevaMascota.id = newId;
        }
      },
      (error) => {
        console.error('Error al obtener mascotas:', error);
      }
    );

  }

 

  agregarMascota(mascota: Mascota, cedula: string): void {
    if (cedula) {
      this.mascotaService.addPet(mascota, cedula).subscribe(
        (response) => {
          console.log('Mascota creada con éxito', response);
          this.router.navigate(['/vet/pets']);
          this.formularioMascota.id =  this.formularioMascota.id + 1;
        },
        (error) => {
          console.error('Error al crear la mascota', error);
          this.router.navigate(['/vet/pets']);
        }
      );
    } else {
      console.error('No se ha proporcionado una cédula válida');
    }
  }
   


 
}