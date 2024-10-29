import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Cliente } from '../../../model/cliente';

@Component({
  selector: 'app-nav-bar-client',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './nav-bar-client.component.html',
  styleUrl: './nav-bar-client.component.css'
})
export class NavBarClientComponent {


  cliente: any;

  constructor(
    private router: Router
  ) { 

    const navigation = this.router.getCurrentNavigation();
    this.cliente = navigation?.extras.state?.['cliente'] ?? null;
  
  }


  ngOnInit(): void {

    if (this.cliente) {
      console.log('Cliente en el portal:', this.cliente);
    }
  
  }


}
