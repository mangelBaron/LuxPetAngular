import { Component } from '@angular/core';
import { Mascota } from '../../../model/mascota';
import { PetService } from '../../../services/pet.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pet-info',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './pet-info.component.html',
  styleUrl: './pet-info.component.css'
})
export class PetInfoComponent {
  selectedPet ?: Mascota;
  mascotaID ?: number = 0; 

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.mascotaID = Number(this.route.snapshot.paramMap.get('id'));
    this.petService.findById(this.mascotaID).subscribe(
      (pet) => {
        this.selectedPet = pet;
      }      
    )
  }
}
