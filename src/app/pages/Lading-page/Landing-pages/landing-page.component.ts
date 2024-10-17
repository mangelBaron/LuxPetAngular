import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/Landing/header/header.component";
import { InfoLandingComponent } from "../../../components/Landing/info-landing/info-landing.component";
import { FooterComponent } from "../../../components/Landing/footer/footer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, InfoLandingComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
