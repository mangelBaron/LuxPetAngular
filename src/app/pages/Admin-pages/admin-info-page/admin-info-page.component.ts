import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../../../components/Admin/header-admin/header-admin.component';
import { VetInfoComponent } from '../../../components/Admin/vet-info/vet-info.component';

@Component({
  selector: 'app-admin-info-page',
  standalone: true,
  imports: [HeaderAdminComponent, VetInfoComponent],
  templateUrl: './admin-info-page.component.html',
  styleUrl: './admin-info-page.component.css'
})
export class AdminInfoPageComponent {

}
