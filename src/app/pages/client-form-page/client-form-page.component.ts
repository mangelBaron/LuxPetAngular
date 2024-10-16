import { Component, Input } from '@angular/core';
import { AddClientFormComponent } from "../../components/add-client-form/add-client-form.component";
import { HeaderLoginComponent } from "../../components/header-login/header-login.component";
import { Cliente } from '../../model/cliente';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-client-form-page',
  standalone: true,
  imports: [AddClientFormComponent, HeaderLoginComponent],
  templateUrl: './client-form-page.component.html',
  styleUrl: './client-form-page.component.css'
})
export class ClientFormPageComponent {


  constructor(
  
  ) { }


 

  
}
