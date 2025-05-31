import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-usuario-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './tarjeta-usuario-card.component.html',
  styleUrl: './tarjeta-usuario-card.component.scss'
})
export class UsuarioCardComponent implements OnInit {
  @Input() nombre!: string;
  @Input() apellidos!: string;
  @Input() numeroEmpresa!: string;
  @Input() edad!: number;
  @Input() rol!: string;
  @Input() ultimoAcceso!: string;
  @Input() correo!: string;

  imagenUrl: string = '';

  ngOnInit(): void {
    const nombreFormateado = this.nombre?.trim().replace(/\s+/g, '') + '.png';
    this.imagenUrl = `assets/user/${nombreFormateado}`;
  }

  imagenNoEncontrada(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/user/default.png';
  }
}

