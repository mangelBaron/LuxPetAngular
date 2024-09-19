import { Component } from '@angular/core';
import { PetInfoComponent } from "../../components/pet-info/pet-info.component";
import { HeaderLoginComponent } from "../../components/header-login/header-login.component";

@Component({
  selector: 'app-pet-info-page',
  standalone: true,
  imports: [PetInfoComponent, HeaderLoginComponent],
  templateUrl: './pet-info-page.component.html',
  styleUrl: './pet-info-page.component.css'
})
export class PetInfoPageComponent {

}
