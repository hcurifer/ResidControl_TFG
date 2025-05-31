import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-tareas-completadas',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './tareas-completadas.component.html',
  styleUrl: './tareas-completadas.component.scss',
  animations: [
    trigger('entradaSuave', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class TareasCompletadasComponent {
  @Input() tareas: { descripcion: string; horas: number }[] = [];
}
