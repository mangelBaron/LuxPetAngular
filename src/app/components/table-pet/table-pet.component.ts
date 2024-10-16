import { Component } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PetService } from '../../services/pet.service';



@Component({
  selector: 'app-table-pet',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './table-pet.component.html',
  styleUrl: './table-pet.component.css'
})
export class TablePetComponent {

  selectedMascota?: Mascota;  
  mascotasList !: Mascota[];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.findAll().subscribe(
      (pets) => {
        this.mascotasList = pets;
      },
      (error) => {
        console.error('Error al obtener mascotas:', error);
      } 
    )
  }

  mostrarMascota(mascota: Mascota): void {
    this.selectedMascota = mascota;
  }

  deleteMascota(mascota: Mascota): void {
    this.petService.deleteById(mascota.id!).subscribe(() => {
      this.mascotasList = this.mascotasList.filter(m => m !== mascota);
    });
  }
  

}
