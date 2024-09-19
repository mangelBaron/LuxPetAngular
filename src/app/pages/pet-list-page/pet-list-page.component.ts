import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../components/header-login/header-login.component";
import { TablePetComponent } from "../../components/table-pet/table-pet.component";

@Component({
  selector: 'app-pet-list-page',
  standalone: true,
  imports: [HeaderLoginComponent, TablePetComponent],
  templateUrl: './pet-list-page.component.html',
  styleUrl: './pet-list-page.component.css'
})
export class PetListPageComponent {

}
