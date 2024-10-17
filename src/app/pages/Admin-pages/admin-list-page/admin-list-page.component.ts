import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../../../components/Admin/header-admin/header-admin.component';
import { TableVetComponent } from '../../../components/Admin/table-vet/table-vet.component';
@Component({
  selector: 'app-admin-list-page',
  standalone: true,
  imports: [HeaderAdminComponent, TableVetComponent],
  templateUrl: './admin-list-page.component.html',
  styleUrl: './admin-list-page.component.css'
})
export class AdminListPageComponent {

}
