import { Component } from '@angular/core';
import { AddClientFormComponent } from "../../components/add-client-form/add-client-form.component";
import { HeaderLoginComponent } from "../../components/header-login/header-login.component";

@Component({
  selector: 'app-client-form-page',
  standalone: true,
  imports: [AddClientFormComponent, HeaderLoginComponent],
  templateUrl: './client-form-page.component.html',
  styleUrl: './client-form-page.component.css'
})
export class ClientFormPageComponent {

}
