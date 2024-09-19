import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../components/header-login/header-login.component";
import { VeterinaryLoginComponent } from "../../components/veterinary-login/veterinary-login.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-veterinary-login-page',
  standalone: true,
  imports: [HeaderLoginComponent, VeterinaryLoginComponent, FooterComponent],
  templateUrl: './veterinary-login-page.component.html',
  styleUrl: './veterinary-login-page.component.css'
})
export class VeterinaryLoginPageComponent {

}
