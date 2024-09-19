import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../components/header-login/header-login.component";
import { ClienteLoginComponent } from "../../components/cliente-login/cliente-login.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-client-login-page',
  standalone: true,
  imports: [HeaderLoginComponent, ClienteLoginComponent, FooterComponent],
  templateUrl: './client-login-page.component.html',
  styleUrl: './client-login-page.component.css'
})
export class ClientLoginPageComponent {

}
