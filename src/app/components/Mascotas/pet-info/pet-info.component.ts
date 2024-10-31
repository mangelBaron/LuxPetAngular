import { Component } from '@angular/core';
import { Mascota } from '../../../model/mascota';
import { PetService } from '../../../services/pet.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Cliente } from '../../../model/cliente';
import { Location } from '@angular/common';
import { Tratamiento } from '../../../model/tratamiento';
import { TratamientoService } from '../../../services/tratamiento.service';

@Component({
  selector: 'app-pet-info',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './pet-info.component.html',
  styleUrl: './pet-info.component.css'
})
export class PetInfoComponent {
  selectedPet ?: Mascota;
  duenio ?: Cliente;
  mascotaID ?: number = 0; 
  returnUrl: string = '/vet/pets'; // Valor por defecto

  tratamientoList: Tratamiento[] = [];


  constructor(private petService: PetService, private route: ActivatedRoute,     private location: Location, private tratamientoService: TratamientoService) { }

  ngOnInit(): void {
    this.mascotaID = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Mascota ID:', this.mascotaID); // Verificar el ID
    this.returnUrl = this.location.path() || this.returnUrl;

    this.petService.findById(this.mascotaID).subscribe(
      (pet) => {
        this.selectedPet = pet;
      }      
    )

    this.tratamientoService.findTratamientosByPet(this.mascotaID).subscribe(
    (tratamientos) => {
      this.tratamientoList = tratamientos;
      console.log('Tratamientos:', tratamientos);
    },
    (error) => {
      console.error('Error al obtener tratamientos:', error);
    }
  );
    

   

    this.petService.findClient(this.mascotaID).subscribe(
      (client) => {
        this.duenio = client;
        console.log(client);
      }
    )
  }

  goBack(): void {
    this.location.back();
  }
}
