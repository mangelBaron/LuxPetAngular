import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TratamientoService } from '../../../services/tratamiento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tratamiento } from '../../../model/tratamiento';
import { DrogaService } from '../../../services/droga.service';
import { Droga } from '../../../model/droga';
import { PetService } from '../../../services/pet.service';
import { VeterinarioService } from '../../../services/veterinario.service';

@Component({
  selector: 'app-add-tratamiento-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-tratamiento-form.component.html',
  styleUrl: './add-tratamiento-form.component.css'
})
export class AddTratamientoFormComponent {


  formularioTratamiento : Tratamiento = {
    id: 0,
    fecha: new Date(),
    droga: undefined,
    mascota: undefined,
    veterinario: undefined
  };

  drogaList!: Droga[];
  drogaSeleccionada: string = '';
  
  veterinarioId: number | null = null
  mascotaId: number | null = null;

  constructor(
    private tratamientoService : TratamientoService,
    private drogaService: DrogaService,
    private petService: PetService,
    private veterinarioService: VeterinarioService,
    private router: Router,
    private route: ActivatedRoute
    ){
      const navigation = this.router.getCurrentNavigation();
      this.mascotaId = navigation?.extras.state?.['mascotaId'] ?? null;
      this.veterinarioId = navigation?.extras.state?.['veterinarioId'] ?? null;
    }


    ngOnInit(): void {
      this.drogaService.findAll().subscribe(
        (drogas) => {
          this.drogaList = drogas;
        },
        (error) => {
          console.error('Error al obtener drogas:', error);
        }
      );
  
      if (this.mascotaId) {
        this.petService.findById(this.mascotaId).subscribe(
          (mascota) => {
            this.formularioTratamiento.mascota = mascota;
            console.log('Mascota:', mascota);
          },
          (error) => {
            console.error('Error al obtener mascota:', error);
          }
        );
      } else {
        console.error('ID de mascota no válido:', this.mascotaId);
      }

      if (this.veterinarioId) {
        this.veterinarioService.findById(this.veterinarioId).subscribe(
          (veterinario) => {
            this.formularioTratamiento.veterinario = veterinario;
            console.log('Veterinario:', veterinario);
          },
          (error) => {
            console.error('Error al obtener veterinario:', error);
          }
        );
      } else {
        console.error('ID de veterinario no válido:', this.veterinarioId);
      }
    }
  

    agregarTratamiento(tratamiento: Tratamiento, id: string): void {
      if (id) {
        this.drogaService.findById(Number(id)).subscribe(
          (droga) => {
            tratamiento.droga = droga;
            this.tratamientoService.addTratamiento(tratamiento).subscribe(
              (tratamiento) => {
                console.log('Tratamiento agregado:', tratamiento);
                this.router.navigate(['/vet/pets'], { state: { tratamiento: tratamiento } });
              },
              (error) => {
                console.error('Error al agregar tratamiento:', error);
              }
            );
          },
          (error) => {
            console.error('Error al obtener droga:', error);
          }
        );
      } else {
        console.error('ID de droga no válido:', id);
      }
    }
}
