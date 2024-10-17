import { Component } from '@angular/core';
import { Veterinario } from '../../../model/veterinario';
import { VeterinarioService } from '../../../services/veterinario.service';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-vet',
  standalone: true,
  imports: [CommonModule, RouterLink],
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

  ngOnInit(): void {
    this.vetService.findAll().subscribe(
    (vets) => {
      this.vetList = vets;
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

  eliminarVeterinario(vet: Veterinario){
      var index = this.vetList.indexOf(vet);
      this.vetList.splice(index,  1);
      if (vet.id !== undefined) {
        this.vetService.deleteById(vet.id);
      }
    }

}
