import { Component } from '@angular/core';
import { AdminLoginComponent } from '../../../components/Admin/admin-login/admin-login.component';
import { HeaderLoginComponent } from '../../../components/Landing/header-login/header-login.component';
import { FooterComponent } from '../../../components/Landing/footer/footer.component';

@Component({
  selector: 'app-admin-login-page',
  standalone: true,
  imports: [AdminLoginComponent, HeaderLoginComponent, FooterComponent],
  templateUrl: './admin-login-page.component.html',
  styleUrl: './admin-login-page.component.css'
})
export class AdminLoginPageComponent {

}
