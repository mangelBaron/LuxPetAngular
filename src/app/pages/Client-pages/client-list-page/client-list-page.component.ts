import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../../components/Landing/header-login/header-login.component";
import { TableClientComponent } from "../../../components/Clientes/table-client/table-client.component";

@Component({
  selector: 'app-client-list-page',
  standalone: true,
  imports: [HeaderLoginComponent, TableClientComponent],
  templateUrl: './client-list-page.component.html',
  styleUrl: './client-list-page.component.css'
})
export class ClientListPageComponent {

}
