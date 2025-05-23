import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-usuario-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './tarjeta-usuario-card.component.html',
  styleUrl: './tarjeta-usuario-card.component.scss'
})
export class UsuarioCardComponent {
  @Input() nombre: string = '';
  @Input() apellidos: string = '';
  @Input() numeroEmpresas: number = 0;
  @Input() imagenUrl: string = 'assets/img/user-placeholder.png';
}
