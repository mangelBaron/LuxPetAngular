import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Veterinario } from '../../../model/veterinario';
import { VeterinarioService } from '../../../services/veterinario.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-update-vet-form',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './update-vet-form.component.html',
  styleUrl: './update-vet-form.component.css'
})
export class UpdateVetFormComponent implements OnInit {

  formularioVeterinario : Veterinario = {
    id: 0,
    nombre: '',
    cedula: '',
    contrasenia: '',
    especialidad: '',
    numAtenciones: 0,
    mascotas: []
  };


  constructor(
    private vetService: VeterinarioService,
    private route: ActivatedRoute,
    private router : Router
  ) { }





ngOnInit(): void {
    console.log("ngOnInit de UpdateVetFormComponent");

    this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (!isNaN(id)) {
            this.vetService.findById(id).subscribe(
                (vetInfo) => {
                    this.formularioVeterinario = vetInfo;
                },
                (error) => {
                    console.error('Error al obtener el veterinario', error);
                }
            );
        } else {
            console.error('ID de veterinario no válido');
        }
    });
}


actualizarVeterinario(): void {
  console.log('Veterinario a actualizar', this.formularioVeterinario.id, this.formularioVeterinario);
  this.vetService.updateVeterinario(this.formularioVeterinario.id, this.formularioVeterinario).subscribe(
      (response) => {
          console.log('Veterinario actualizado con éxito', response);
          this.router.navigate(['/admin']);
      },
      (error) => {
          console.error('Error al actualizar el veterinario', error);
          // Opcional: Mostrar un mensaje de error al usuario
      }
  );
}


}
