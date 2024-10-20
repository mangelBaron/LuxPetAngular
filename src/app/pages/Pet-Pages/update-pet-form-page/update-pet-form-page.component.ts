import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../../components/Landing/header-login/header-login.component";
import { AddPetFormComponent } from "../../../components/Mascotas/add-pet-form/add-pet-form.component";
import { UpdatePetFormComponent } from "../../../components/Mascotas/update-pet-form/update-pet-form.component";

@Component({
  selector: 'app-update-pet-form-page',
  standalone: true,
  imports: [HeaderLoginComponent, AddPetFormComponent, UpdatePetFormComponent],
  templateUrl: './update-pet-form-page.component.html',
  styleUrl: './update-pet-form-page.component.css'
})
export class UpdatePetFormPageComponent {

}
