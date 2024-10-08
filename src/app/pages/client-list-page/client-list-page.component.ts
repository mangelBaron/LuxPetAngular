import { Component } from '@angular/core';
import { HeaderLoginComponent } from "../../components/header-login/header-login.component";
import { TableClientComponent } from "../../components/table-client/table-client.component";

@Component({
  selector: 'app-client-list-page',
  standalone: true,
  imports: [HeaderLoginComponent, TableClientComponent],
  templateUrl: './client-list-page.component.html',
  styleUrl: './client-list-page.component.css'
})
export class ClientListPageComponent {

}
