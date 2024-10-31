import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../../../components/Admin/header-admin/header-admin.component';
import { AddTratamientoFormComponent } from '../../../components/Admin/add-tratamiento-form/add-tratamiento-form.component';
import { HeaderVetComponent } from '../../../components/Mascotas/header-vet/header-vet.component';

@Component({
  selector: 'app-admin-tratamiento-form-page',
  standalone: true,
  imports: [HeaderVetComponent, AddTratamientoFormComponent],
  templateUrl: './admin-tratamiento-form-page.component.html',
  styleUrl: './admin-tratamiento-form-page.component.css'
})
export class AdminTratamientoFormPageComponent {

}
