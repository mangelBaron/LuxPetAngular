import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { InfoLandingComponent } from "./components/info-landing/info-landing.component";
import { HeaderLoginComponent } from "./components/header-login/header-login.component";
import { ClienteLoginComponent } from "./components/cliente-login/cliente-login.component";
import { ClientLoginPageComponent } from "./pages/client-login-page/client-login-page.component";
import { PetListPageComponent } from "./pages/pet-list-page/pet-list-page.component";
import { ClientListPageComponent } from "./pages/client-list-page/client-list-page.component";
import { PetInfoPageComponent } from "./pages/pet-info-page/pet-info-page.component";
import { ClientFormPageComponent } from "./pages/client-form-page/client-form-page.component";
import { PetFormPageComponent } from "./pages/pet-form-page/pet-form-page.component";
import { ClientPortalPageComponent } from "./pages/client-portal-page/client-portal-page.component";
import { LandingPageComponent } from './pages/landing-page/landing-page.component';     

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InfoLandingComponent, HeaderLoginComponent, ClienteLoginComponent, ClientLoginPageComponent, PetListPageComponent, ClientListPageComponent, PetInfoPageComponent, ClientFormPageComponent, PetFormPageComponent, ClientPortalPageComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LuxPetAngular';
}
