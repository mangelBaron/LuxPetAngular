import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';
import { Dashboard } from '../../../model/dashboard';
import { Droga } from '../../../model/droga';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  dashboard: Dashboard = {
    veterinariosActivos: 1,
    veterinariosInactivos: 1,
    mascotasActivas: 1,
    mascotasInactivas: 1,
    drogas: [] as Droga[] | undefined
  }

    /* veterinariosActivos: number;
    veterinariosInactivos: number;
    mascotasActivas: number;
    mascotasInactivas: number;
    drogas ?: Droga[]; */

constructor(

){}

ngOnInit(){

}



}
