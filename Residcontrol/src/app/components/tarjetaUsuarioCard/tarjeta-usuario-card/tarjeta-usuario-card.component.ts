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
  @Input() nombre!: string;
  @Input() apellidos!: string;
  @Input() numeroEmpresa!: string;
  @Input() edad!: number;
  @Input() imagenUrl!: string;
  @Input() rol!: string;
  @Input() ultimoAcceso!: string;
  @Input() correo!: string;
}
