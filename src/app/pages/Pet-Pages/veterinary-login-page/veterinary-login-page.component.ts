import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../../components/Landing/header-login/header-login.component";
import { VeterinaryLoginComponent } from "../../../components/Mascotas/veterinary-login/veterinary-login.component";
import { FooterComponent } from "../../../components/Landing/footer/footer.component";

@Component({
  selector: 'app-veterinary-login-page',
  standalone: true,
  imports: [HeaderLoginComponent, VeterinaryLoginComponent, FooterComponent],
  templateUrl: './veterinary-login-page.component.html',
  styleUrl: './veterinary-login-page.component.css'
})
export class VeterinaryLoginPageComponent {

}
