import { Component } from '@angular/core';
import { ClientInfoComponent } from "../../../components/Clientes/client-info/client-info.component";
import { HeaderLoginComponent } from "../../../components/Landing/header-login/header-login.component";
import { HeaderVetComponent } from "../../../components/Mascotas/header-vet/header-vet.component";

@Component({
  selector: 'app-client-info-page',
  standalone: true,
  imports: [ClientInfoComponent, HeaderLoginComponent, HeaderVetComponent],
  templateUrl: './client-info-page.component.html',
  styleUrl: './client-info-page.component.css'
})
export class ClientInfoPageComponent {

}
