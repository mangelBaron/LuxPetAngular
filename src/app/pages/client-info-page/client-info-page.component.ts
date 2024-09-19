import { Component } from '@angular/core';
import { ClientInfoComponent } from "../../components/client-info/client-info.component";
import { HeaderLoginComponent } from "../../components/header-login/header-login.component";

@Component({
  selector: 'app-client-info-page',
  standalone: true,
  imports: [ClientInfoComponent, HeaderLoginComponent],
  templateUrl: './client-info-page.component.html',
  styleUrl: './client-info-page.component.css'
})
export class ClientInfoPageComponent {

}
