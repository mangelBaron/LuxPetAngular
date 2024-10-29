import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';
import { Dashboard } from '../../../model/dashboard';
import { Droga } from '../../../model/droga';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from '../../../services/dashboard.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  numeroTratamientos: number = 0;
  numeroVeterinarios: number = 0;
  numeroMascotas: number = 0;
  numeroMascotasInactivas: number = 0;
  ventasTotales: number = 0;
  gananciasTotales: number = 0;

  topdrogas: Droga[] = [];


  constructor(
    private dashService : DashboardService
  ){}

  ngOnInit(): void {
  this.dashService.getGanacias().subscribe(
    (data) => {
      this.gananciasTotales = Number(data);
    },
    (error) => {
      console.error('Error al obtener ganancias:', error);
    }
  );

  this.dashService.getVeterinariosActivos().subscribe(
    (data) => {
      this.numeroVeterinarios = Number(data);
    },
    (error) => {
      console.error('Error al obtener veterinarios:', error);
    }
  );

  this.dashService.getTratamientos().subscribe(
    (data) => {
      this.numeroTratamientos = Number(data);
    },
    (error) => {
      console.error('Error al obtener tratamientos:', error);
    }
  );

  this.dashService.getVentasTotales().subscribe(
    (data) => {
      this.ventasTotales = Number(data);
    },
    (error) => {
      console.error('Error al obtener ventas:', error);
    }
  );

  this.dashService.getMascotasActivas().subscribe(
    (data) => {
      this.numeroMascotas = Number(data);
    },
    (error) => {
      console.error('Error al obtener mascotas:', error);
    }
  );

  this.dashService.getMascotasInactivas().subscribe(
    (data) => {
      this.numeroMascotasInactivas = Number(data);
    },
    (error) => {
      console.error('Error al obtener mascotas:', error);
    }
  );

  this.dashService.getTopDrogas().subscribe(
    (data) => {
      this.topdrogas = Array.isArray(data) ? data : [];
    },
    (error) => {
      console.error('Error al obtener drogas:', error);
  }
  );

}
}