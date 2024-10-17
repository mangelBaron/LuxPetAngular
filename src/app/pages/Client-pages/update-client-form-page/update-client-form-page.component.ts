import { Component, Input } from '@angular/core';
import { AddClientFormComponent } from "../../../components/Clientes/add-client-form/add-client-form.component";
import { HeaderLoginComponent } from "../../../components/Landing/header-login/header-login.component";
import { Cliente } from '../../../model/cliente';
import { ClientService } from '../../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../../services/pet.service';
import { mergeMap } from 'rxjs';
import { UpdateClientFormComponent } from '../../../components/Clientes/update-client-form/update-client-form.component';

@Component({
  selector: 'app-client-form-page',
  standalone: true,
  imports: [UpdateClientFormComponent, HeaderLoginComponent],
  templateUrl: './update-client-form-page.component.html',
  styleUrl: './update-client-form-page.component.css'
})
export class UpdateClientFormPageComponent {


  constructor(
  
  ) { }


 

  
}
