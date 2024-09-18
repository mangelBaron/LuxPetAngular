import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../components/header-login/header-login.component";
import { AddPetFormComponent } from "../../components/add-pet-form/add-pet-form.component";

@Component({
  selector: 'app-pet-form-page',
  standalone: true,
  imports: [HeaderLoginComponent, AddPetFormComponent],
  templateUrl: './pet-form-page.component.html',
  styleUrl: './pet-form-page.component.css'
})
export class PetFormPageComponent {

}
