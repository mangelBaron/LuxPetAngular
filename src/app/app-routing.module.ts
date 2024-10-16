import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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


  // Ruta por defecto: redirigir a 'landing' si no se especifica ruta
  { path: '', redirectTo: '/landing', pathMatch: 'full' },

  // Ruta comodín (Wildcard): redirige a 'landing' si la ruta no existe
  { path: '**', redirectTo: '/landing' }
];

// Configuración del módulo de rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
