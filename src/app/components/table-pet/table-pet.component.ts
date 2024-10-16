import { Component } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Importa FormsModule
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-table-pet',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule, FormsModule], // Agrega FormsModule aquí
  templateUrl: './table-pet.component.html',
  styleUrls: ['./table-pet.component.css']
})
export class TablePetComponent {

  selectedMascota?: Mascota;  
  mascotasList: Mascota[] = [];
  filteredMascotas: Mascota[] = [];  // Lista filtrada

  searchMascota: string = '';  // Término de búsqueda para Mascota
  searchCliente: string = '';  // Término de búsqueda para Cliente
  searchVeterinario: string = '';  // Término de búsqueda para Veterinario

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.findAll().subscribe(
      (pets) => {
        this.mascotasList = pets;
        this.filteredMascotas = pets;  // Inicialmente, todos los registros se muestran
      },
      (error) => {
        console.error('Error al obtener mascotas:', error);
      } 
    );
  }

  // Función para filtrar la lista basada en los términos de búsqueda
  filterMascotas(): void {
    this.filteredMascotas = this.mascotasList.filter(mascota =>
      mascota.nombre.toLowerCase().includes(this.searchMascota.toLowerCase()) &&
      (!this.searchCliente || mascota.cliente?.nombre.toLowerCase().includes(this.searchCliente.toLowerCase())) &&
      (!this.searchVeterinario || mascota.veterinario?.nombre.toLowerCase().includes(this.searchVeterinario.toLowerCase()))
    );
  }

  mostrarMascota(mascota: Mascota): void {
    this.selectedMascota = mascota;
  }

  deleteMascota(mascota: Mascota): void {
    this.petService.deleteById(mascota.id!).subscribe(() => {
      this.mascotasList = this.mascotasList.filter(m => m !== mascota);
      this.filterMascotas(); // Refrescar la lista después de eliminar
    });
  }
}
