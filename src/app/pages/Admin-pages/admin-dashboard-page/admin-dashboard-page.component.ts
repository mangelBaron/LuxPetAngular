import { Component } from '@angular/core';
import { DashboardComponent } from '../../../components/Dashboards/dashboard/dashboard.component';
import { HeaderAdminComponent } from '../../../components/Admin/header-admin/header-admin.component';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-admin-dashboard-page',
  standalone: true,
  imports: [DashboardComponent, HeaderAdminComponent],
  templateUrl: './admin-dashboard-page.component.html',
  styleUrl: './admin-dashboard-page.component.css'
})
export class AdminDashboardPageComponent {


}
