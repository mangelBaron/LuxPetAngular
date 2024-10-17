import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/Landing/header/header.component";
import { FooterComponent } from "./components/Landing/footer/footer.component";
import { InfoLandingComponent } from "./components/Landing/info-landing/info-landing.component";
import { HeaderLoginComponent } from "./components/Landing/header-login/header-login.component";
import { ClienteLoginComponent } from "./components/Clientes/cliente-login/cliente-login.component";
import { ClientLoginPageComponent } from "./pages/Client-pages/client-login-page/client-login-page.component";
import { PetListPageComponent } from "./pages/Pet-Pages/pet-list-page/pet-list-page.component";
import { ClientListPageComponent } from "./pages/Client-pages/client-list-page/client-list-page.component";
import { PetInfoPageComponent } from "./pages/Pet-Pages/pet-info-page/pet-info-page.component";
import { ClientFormPageComponent } from "./pages/Client-pages/client-form-page/client-form-page.component";
import { PetFormPageComponent } from "./pages/Pet-Pages/pet-form-page/pet-form-page.component";
import { ClientPortalPageComponent } from "./pages/Client-pages/client-portal-page/client-portal-page.component";
import { LandingPageComponent } from './pages/Lading-page/Landing-pages/landing-page.component';     

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    InfoLandingComponent, 
    HeaderLoginComponent, 
    ClienteLoginComponent, 
    ClientLoginPageComponent, 
    PetListPageComponent, 
    ClientListPageComponent, 
    PetInfoPageComponent, 
    ClientFormPageComponent, 
    PetFormPageComponent, 
    ClientPortalPageComponent, 
    LandingPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LuxPetAngular';
}
