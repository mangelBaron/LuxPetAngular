import { Component } from '@angular/core';
import { VeterinarioService } from '../../../services/veterinario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from '../../../model/veterinario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-vet-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-vet-form.component.html',
  styleUrl: './add-vet-form.component.css'
})
export class AddVetFormComponent {


  
  sendVet!: Veterinario;

  formularioVeterinario: Veterinario = {
    id: 0,
    cedula: "",
    contrasenia: "",
    especialidad: "",
    numAtenciones: 0,
    nombre: "",
    mascotas: []
  };


constructor(
private vetService: VeterinarioService,
private router: Router,
private route: ActivatedRoute
){}



agregarVeterinario(): void {
  this.vetService.addVeterinario(this.formularioVeterinario).subscribe(
    (response) => {
      console.log('Cliente creado con éxito', response);
      this.router.navigate(['/admin']);
    },
    (error) => {
      console.error('Error al crear el cliente', error);
    }
  );
}

}
