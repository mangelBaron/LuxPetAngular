import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../../components/Landing/header-login/header-login.component";
import { AddPetFormComponent } from "../../../components/Mascotas/add-pet-form/add-pet-form.component";
import { HeaderVetComponent } from "../../../components/Mascotas/header-vet/header-vet.component";

@Component({
  selector: 'app-pet-form-page',
  standalone: true,
  imports: [HeaderLoginComponent, AddPetFormComponent, HeaderVetComponent],
  templateUrl: './pet-form-page.component.html',
  styleUrl: './pet-form-page.component.css'
})
export class PetFormPageComponent {

}
