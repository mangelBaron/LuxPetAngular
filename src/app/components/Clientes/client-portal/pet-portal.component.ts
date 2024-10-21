import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Mascota } from '../../../model/mascota';
import { PetService } from '../../../services/pet.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pet-portal',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './pet-portal.component.html',
  styleUrl: './pet-portal.component.css'
})
export class PetPortalComponent {

  petList !: Mascota[];
  selectedMascota?: Mascota;
  filteredMascotas: Mascota[] = [];  

  searchMascota: string = '';



  constructor(
    private petService: PetService,
    private router: Router,
    private route: ActivatedRoute  
  ) { }
 

  ngOnInit(): void {
    this.petService.findAll().subscribe(
      (mascotas) => {
        this.petList = mascotas;
        this.filteredMascotas = mascotas;
      }
    );
  }

  filterMascotas(): void {
    this.filteredMascotas = this.petList.filter(mascota =>
      mascota.nombre.toLowerCase().includes(this.searchMascota.toLowerCase()) ||
      mascota.raza.toLowerCase().includes(this.searchMascota.toLowerCase())
    );
  }



}
