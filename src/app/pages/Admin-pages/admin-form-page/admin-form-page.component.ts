import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../../../components/Admin/header-admin/header-admin.component';
import { AddVetFormComponent } from '../../../components/Admin/add-vet-form/add-vet-form.component';
import { AddPetFormComponent } from "../../../components/Mascotas/add-pet-form/add-pet-form.component";

@Component({
  selector: 'app-admin-form-page',
  standalone: true,
  imports: [HeaderAdminComponent, AddVetFormComponent, AddPetFormComponent],
  templateUrl: './admin-form-page.component.html',
  styleUrl: './admin-form-page.component.css'
})
export class AdminFormPageComponent {

}
