import { Component } from '@angular/core';
import { PetInfoComponent } from "../../../components/Mascotas/pet-info/pet-info.component";
import { HeaderLoginComponent } from "../../../components/Landing/header-login/header-login.component";
import { HeaderVetComponent } from "../../../components/Mascotas/header-vet/header-vet.component";

@Component({
  selector: 'app-pet-info-page',
  standalone: true,
  imports: [PetInfoComponent, HeaderLoginComponent, HeaderVetComponent],
  templateUrl: './pet-info-page.component.html',
  styleUrl: './pet-info-page.component.css'
})
export class PetInfoPageComponent {

}
