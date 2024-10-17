import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Importar los componentes que mencionaste
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoLandingComponent } from './components/info-landing/info-landing.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { ClienteLoginComponent } from './components/cliente-login/cliente-login.component';
import { ClientLoginPageComponent } from './pages/client-login-page/client-login-page.component';
import { PetListPageComponent } from './pages/pet-list-page/pet-list-page.component';
import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';
import { PetInfoPageComponent } from './pages/pet-info-page/pet-info-page.component';
import { ClientFormPageComponent } from './pages/client-form-page/client-form-page.component';
import { PetFormPageComponent } from './pages/pet-form-page/pet-form-page.component';
import { ClientPortalPageComponent } from './pages/client-portal-page/client-portal-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { VeterinaryLoginComponent } from './components/veterinary-login/veterinary-login.component';
import { VeterinaryLoginPageComponent } from './pages/veterinary-login-page/veterinary-login-page.component';
import { ClientInfoPageComponent } from './pages/client-info-page/client-info-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UpdateClientFormComponent } from './components/update-client-form/update-client-form.component';
import { UpdateClientFormPageComponent } from './pages/update-client-form-page/update-client-form-page.component';

// Definir las rutas
export const routes: Routes = [
  // Rutas para los componentes mencionados
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'info-landing', component: InfoLandingComponent },
  { path: 'header-login', component: HeaderLoginComponent },
  { path: 'cliente-login', component: ClienteLoginComponent },
  { path: 'client-login', component: ClientLoginPageComponent },
  { path: 'pet-list', component: PetListPageComponent },
  { path: 'clients', component: ClientListPageComponent },
  { path: 'mascota/:id', component: PetInfoPageComponent },
  { path: 'client-form', component: ClientFormPageComponent },
  { path: 'pet-form', component: PetFormPageComponent },
  { path: 'client-portal', component: ClientPortalPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'vet-login', component: VeterinaryLoginPageComponent },
  {path: 'client/:id', component: ClientInfoPageComponent},
  {path: 'client/update/:id', component: UpdateClientFormPageComponent},

  // Ruta por defecto: redirigir a 'landing' si no se especifica ruta
  { path: '', redirectTo: '/landing', pathMatch: 'full' },

  // Ruta comodín (Wildcard): redirige a 'landing' si la ruta no existe
  { path: '**', redirectTo: '/landing' }
];

// Configuración del módulo de rutas
@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule],
  
  exports: [],

})
export class AppRoutingModule { }
