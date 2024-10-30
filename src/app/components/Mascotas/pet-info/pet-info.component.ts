import { Component } from '@angular/core';
import { Mascota } from '../../../model/mascota';
import { PetService } from '../../../services/pet.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Cliente } from '../../../model/cliente';
import { Location } from '@angular/common';

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

  constructor(private petService: PetService, private route: ActivatedRoute,     private location: Location) { }

  ngOnInit(): void {
    this.mascotaID = Number(this.route.snapshot.paramMap.get('id'));
    this.returnUrl = this.location.path() || this.returnUrl;

    this.petService.findById(this.mascotaID).subscribe(
      (pet) => {
        this.selectedPet = pet;
      }      
    )

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
