import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../../components/Landing/header-login/header-login.component";
import { TableClientComponent } from "../../../components/Clientes/table-client/table-client.component";
import { HeaderVetComponent } from '../../../components/Mascotas/header-vet/header-vet.component';
@Component({
  selector: 'app-client-list-page',
  standalone: true,
  imports: [HeaderLoginComponent, TableClientComponent, HeaderVetComponent],
  templateUrl: './client-list-page.component.html',
  styleUrl: './client-list-page.component.css'
})
export class ClientListPageComponent {

}
