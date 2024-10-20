import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Importar los componentes que mencionaste
import { HeaderComponent } from './components/Landing/header/header.component';
import { FooterComponent } from './components/Landing/footer/footer.component';
import { InfoLandingComponent } from './components/Landing/info-landing/info-landing.component';
import { HeaderLoginComponent } from './components/Landing/header-login/header-login.component';
import { ClienteLoginComponent } from './components/Clientes/cliente-login/cliente-login.component';
import { ClientLoginPageComponent } from './pages/Client-pages/client-login-page/client-login-page.component';
import { PetListPageComponent } from './pages/Pet-Pages/pet-list-page/pet-list-page.component';
import { ClientListPageComponent } from './pages/Client-pages/client-list-page/client-list-page.component';
import { PetInfoPageComponent } from './pages/Pet-Pages/pet-info-page/pet-info-page.component';
import { ClientFormPageComponent } from './pages/Client-pages/client-form-page/client-form-page.component';
import { PetFormPageComponent } from './pages/Pet-Pages/pet-form-page/pet-form-page.component';
import { ClientPortalPageComponent } from './pages/Client-pages/client-portal-page/client-portal-page.component';
import { LandingPageComponent } from './pages/Lading-page/Landing-pages/landing-page.component';
import { VeterinaryLoginComponent } from './components/Mascotas/veterinary-login/veterinary-login.component';
import { VeterinaryLoginPageComponent } from './pages/Pet-Pages/veterinary-login-page/veterinary-login-page.component';
import { ClientInfoPageComponent } from './pages/Client-pages/client-info-page/client-info-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UpdateClientFormComponent } from './components/Clientes/update-client-form/update-client-form.component';
import { UpdateClientFormPageComponent } from './pages/Client-pages/update-client-form-page/update-client-form-page.component';
import { AdminListPageComponent } from './pages/Admin-pages/admin-list-page/admin-list-page.component';
import { AdminInfoPageComponent } from './pages/Admin-pages/admin-info-page/admin-info-page.component';
import { AdminDashboardPageComponent } from './pages/Admin-pages/admin-dashboard-page/admin-dashboard-page.component';
import { AdminLoginPageComponent } from './pages/Admin-pages/admin-login-page/admin-login-page.component';
import { AdminUpdatePageComponent } from './pages/Admin-pages/admin-update-page/admin-update-page.component';
import { UpdatePetFormComponent } from './components/Mascotas/update-pet-form/update-pet-form.component';
import { UpdatePetFormPageComponent } from './pages/Pet-Pages/update-pet-form-page/update-pet-form-page.component';

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
  { path: 'client/:id', component: ClientInfoPageComponent},
  { path: 'client/update/:id', component: UpdateClientFormPageComponent},
  { path: 'admin', component: AdminListPageComponent},
  { path: 'admin/:id', component: AdminInfoPageComponent},
  { path: 'admin/update/:id', component: UpdateClientFormPageComponent},
  { path: 'admin/dashboard', component: AdminDashboardPageComponent},
  { path: 'admin-login', component: AdminLoginPageComponent},
  { path: 'mascota/update/:id', component: UpdatePetFormPageComponent},

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
