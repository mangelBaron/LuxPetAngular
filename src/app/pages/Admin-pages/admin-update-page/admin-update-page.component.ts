import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../../components/Admin/header-admin/header-admin.component";
import { UpdateVetFormComponent } from '../../../components/Admin/update-vet-form/update-vet-form.component';

@Component({
  selector: 'app-admin-update-page',
  standalone: true,
  imports: [HeaderAdminComponent, UpdateVetFormComponent],
  templateUrl: './admin-update-page.component.html',
  styleUrl: './admin-update-page.component.css'
})
export class AdminUpdatePageComponent {

}
