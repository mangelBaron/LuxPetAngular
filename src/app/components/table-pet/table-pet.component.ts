import { Component } from '@angular/core';
import { Mascota } from '../../model/mascota';

@Component({
  selector: 'app-table-pet',
  standalone: true,
  imports: [],
  templateUrl: './table-pet.component.html',
  styleUrl: './table-pet.component.css'
})
export class TablePetComponent {

  mascotas: Mascota[] = [
    { id: 1, nombre: 'Firulais', raza: 'Labrador', edad: 3, peso: 25.5, foto: 'firulais.jpg', enfermedad: 'Ninguna', estado: 'Sano' },
    { id: 2, nombre: 'Luna', raza: 'Golden Retriever', edad: 2, peso: 22.3, foto: 'luna.jpg', enfermedad: 'Alergia', estado: 'En tratamiento' },
    { id: 3, nombre: 'Max', raza: 'Pastor Alemán', edad: 4, peso: 30.0, foto: 'max.jpg', enfermedad: 'Ninguna', estado: 'Sano' },
    { id: 4, nombre: 'Bella', raza: 'Beagle', edad: 1, peso: 15.0, foto: 'bella.jpg', enfermedad: 'Ninguna', estado: 'Sano' },
    { id: 5, nombre: 'Rocky', raza: 'Rottweiler', edad: 5, peso: 35.5, foto: 'rocky.jpg', enfermedad: 'Displasia de cadera', estado: 'En tratamiento' },
    { id: 6, nombre: 'Simba', raza: 'Shih Tzu', edad: 3, peso: 7.5, foto: 'simba.jpg', enfermedad: 'Ninguna', estado: 'Sano' },
    { id: 7, nombre: 'Nala', raza: 'Bulldog Francés', edad: 2, peso: 12.0, foto: 'nala.jpg', enfermedad: 'Problemas respiratorios', estado: 'En tratamiento' },
    { id: 8, nombre: 'Duke', raza: 'Doberman', edad: 6, peso: 40.0, foto: 'duke.jpg', enfermedad: 'Ninguna', estado: 'Sano' },
    { id: 9, nombre: 'Toby', raza: 'Poodle', edad: 2, peso: 5.5, foto: 'toby.jpg', enfermedad: 'Ninguna', estado: 'Sano' },
    { id: 10, nombre: 'Bruno', raza: 'Husky Siberiano', edad: 4, peso: 28.0, foto: 'bruno.jpg', enfermedad: 'Ninguna', estado: 'Sano' }
  ];

  

}
