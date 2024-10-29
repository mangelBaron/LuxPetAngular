import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Mascota } from '../../../model/mascota';
import { PetService } from '../../../services/pet.service';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../../model/cliente';
import { ClientService } from '../../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet-portal',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './pet-portal.component.html',
  styleUrl: './pet-portal.component.css'
})
export class PetPortalComponent {

  petList !: Mascota[];
  selectedMascota?: Mascota;
  filteredMascotas: Mascota[] = [];  

  searchMascota: string = '';
  cliente: any;

  constructor(
    private petService: PetService,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute  
  ) {
 
    const navigation = this.router.getCurrentNavigation();
    this.cliente = navigation?.extras.state?.['cliente'] ?? null;
  } 
 

  ngOnInit(): void {

    this.clientService.getPets(this.cliente.id).subscribe(
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
