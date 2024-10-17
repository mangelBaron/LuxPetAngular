import { Component } from '@angular/core';
import { PetInfoComponent } from "../../../components/Mascotas/pet-info/pet-info.component";
import { HeaderLoginComponent } from "../../../components/Landing/header-login/header-login.component";

@Component({
  selector: 'app-pet-info-page',
  standalone: true,
  imports: [PetInfoComponent, HeaderLoginComponent],
  templateUrl: './pet-info-page.component.html',
  styleUrl: './pet-info-page.component.css'
})
export class PetInfoPageComponent {

}
