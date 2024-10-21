import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Cliente } from '../../../model/cliente';

@Component({
  selector: 'app-nav-bar-client',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './nav-bar-client.component.html',
  styleUrl: './nav-bar-client.component.css'
})
export class NavBarClientComponent {

  constructor() { }
  cliente? : Cliente

}
