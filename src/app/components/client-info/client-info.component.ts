import { Component, Input } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-client-info',
  standalone: true,
  imports: [],
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.css' 
})
export class ClientInfoComponent {

@Input()
client! : Cliente;

constructor(
private clientService: ClientService,
private router: Router,
private route: ActivatedRoute,
private mascotaService: PetService
){}


ngOnInit(): void {
  console.log("ngOnInit de ClientFormPageComponent");
  
      this.route.params.subscribe(params => {
  
        const id = Number(params['get']('id'));
  
          this.clientService.findById(id).pipe(
            mergeMap(
              (clientInfo) => {
                this.client = clientInfo;
                return this.mascotaService.findClientPet(this.client.id);
                
              }
            )
          ).subscribe(
            (pets) => {
              this.client.mascotas = pets;  
            }
          )
     });
    }
  
  
    ngOnChanges(): void {
      console.log(this.client);
    }

}
