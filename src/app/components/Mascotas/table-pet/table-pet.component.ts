import { Component } from '@angular/core';
import { Mascota } from '../../../model/mascota';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PetService } from '../../../services/pet.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-table-pet',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule, FormsModule],
  templateUrl: './table-pet.component.html',
  styleUrl: './table-pet.component.css'
})
export class TablePetComponent {

  selectedMascota?: Mascota;  
  petList !: Mascota[];

  constructor(
    private petService: PetService
    ) { }

    filteredMascotas: Mascota[] = [];  // Lista filtrada
    searchMascota: string = '';

    ngOnInit(): void {
      this.petService.findAll().subscribe(
        (mascotas) => {
          this.petList = mascotas;
          this.filteredMascotas = mascotas;
        }
      );
    }
  
    mostrarMascota(mascota: Mascota) {
      this.selectedMascota = mascota;
    }
  
    eliminarMascota(mascota: Mascota) {
      var index = this.petList.indexOf(mascota);
      this.petList.splice(index, 1);
      this.petService.deleteById(mascota.id);
    }
  
    agregarMascota(mascota: Mascota, nombre : string) {
      this.petList.push(mascota);
      this.petService.addPet(mascota, nombre);
    }

    filterMascotas(): void {
      this.filteredMascotas = this.petList.filter(mascota =>
        mascota.nombre.toLowerCase().includes(this.searchMascota.toLowerCase()) ||
        mascota.raza.toLowerCase().includes(this.searchMascota.toLowerCase())
      );
    }
  

}
