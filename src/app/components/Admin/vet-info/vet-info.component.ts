import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PetService } from '../../../services/pet.service';
import { Veterinario } from '../../../model/veterinario';
import { Mascota } from '../../../model/mascota';
import { VeterinarioService } from '../../../services/veterinario.service';
import { mergeMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vet-info',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './vet-info.component.html',
  styleUrl: './vet-info.component.css'
})
export class VetInfoComponent {

  @Input()
  vet! : Veterinario;
  petList: Mascota[] = [];
  
  constructor(
  private vetService: VeterinarioService,
  private router: Router,
  private route: ActivatedRoute,
  private mascotaService: PetService
  ){}
  
  
  ngOnInit(): void {
    console.log("ngOnInit de ClientFormPageComponent");
    
        this.route.params.subscribe(params => {
    
          const id = Number(params['id']);
    
            this.vetService.findById(id).pipe(
              mergeMap(
                (vetInfo) => {
                  this.vet = vetInfo;
                  return this.mascotaService.findVetPet(this.vet.id);
                  
                }
              )
            ).subscribe(
              (pets) => {
                this.petList = pets;  
              }
            )
       });
    }
    
}
