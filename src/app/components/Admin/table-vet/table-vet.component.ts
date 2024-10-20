import { Component } from '@angular/core';
import { Veterinario } from '../../../model/veterinario';
import { VeterinarioService } from '../../../services/veterinario.service';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-vet',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './table-vet.component.html',
  styleUrl: './table-vet.component.css'
})
export class TableVetComponent {
  selectedVet!: Veterinario;

  mostrarForm: boolean = false;

  vetList!: Veterinario[];

  constructor(
    private vetService: VeterinarioService
  ) { }

  filteredVeterinarios: Veterinario[] = [];  // Lista filtrada
  searchVeterinario: string = '';

  ngOnInit(): void {
    this.vetService.findAll().subscribe(
    (vets) => {
      this.vetList = vets;
      this.filteredVeterinarios = vets;
      },
      (error) => {
        console.error('Error al obtener clientes:', error);
      }
    );  
  }
  

  mostrarVeterinario( vet: Veterinario){
    this.selectedVet = vet;
  }


  agregarVeterinario(vet: Veterinario){
    this.vetList.push(vet);
    this.vetService.addVeterinario(vet);
  }

  eliminarVeterinario(veterinario: Veterinario) {
    var index = this.vetList.indexOf(veterinario);
    this.vetList.splice(index, 1);
    this.vetService.deleteById(veterinario.id);
  }


    filterVeterinario(): void {
      this.filteredVeterinarios = this.vetList.filter(veterinario =>
        veterinario.nombre.toLowerCase().includes(this.searchVeterinario.toLowerCase()) ||
        veterinario.cedula.toLowerCase().includes(this.searchVeterinario.toLowerCase())
      );
    }

}
