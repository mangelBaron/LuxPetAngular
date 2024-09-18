import { Component } from '@angular/core';
import { NavBarClientComponent } from "../../components/nav-bar-client/nav-bar-client.component";
import { TablePetComponent } from "../../components/table-pet/table-pet.component";
import { PetPortalComponent } from "../../components/pet-portal/pet-portal.component";

@Component({
  selector: 'app-client-portal-page',
  standalone: true,
  imports: [NavBarClientComponent, TablePetComponent, PetPortalComponent],
  templateUrl: './client-portal-page.component.html',
  styleUrl: './client-portal-page.component.css'
})
export class ClientPortalPageComponent {

}
