import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client.service';
import { Cliente } from '../../model/cliente';


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
    private mascotaService: PetService,
    private clientService: ClientService
  ) { }

  agregarMascota(): void {
    console.log('Agregando mascota:', this.formularioMascota);
    const mascotaNueva = Object.assign({}, this.formularioMascota);

    this.mascotaService.addPet(mascotaNueva).subscribe(
      (response) => {
        console.log('Mascota agregada con éxito', response);
        this.agregarMascotaEvent.emit(this.formularioMascota);
        this.router.navigate(['/pet-list'], { queryParams: { userType: "veterinario" }});
      },
      (error) => {
        console.error('Error al agregar la mascota', error);
      }
    );
  }

  ngOnInit(): void {
    this.clientService.findAll().subscribe(
      (clients) => {
        this.clientList = clients;
      },
      (error) => {
        console.error('Error al obtener clientes:', error);
      }
    );
  }
}