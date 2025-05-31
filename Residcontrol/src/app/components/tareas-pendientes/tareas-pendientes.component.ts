import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tareas-pendientes',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, NgFor, NgIf],
  templateUrl: './tareas-pendientes.component.html',
  styleUrl: './tareas-pendientes.component.scss',
   animations: [
    trigger('tareaAnimada', [
      state(
        'pendiente',
        style({ transform: 'translateX(0)', opacity: 1 })
      ),
      state(
        'completada',
        style({ transform: 'translateX(100px)', opacity: 0 })
      ),
      transition('pendiente => completada', [
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class TareasPendientesComponent {
 @Input() tareas: { id_tarea: number; descripcion: string; horas: number }[] = [];
  tareasCompletadas: Set<number> = new Set();

  constructor(private apiService: ApiService) {}

  completarTarea(tarea: { id_tarea: number; descripcion: string; horas: number }) {
    this.apiService.putEstadoTarea(tarea.id_tarea, 'completada').subscribe(() => {
      this.tareasCompletadas.add(tarea.id_tarea);

      setTimeout(() => {
        this.tareas = this.tareas.filter(t => t.id_tarea !== tarea.id_tarea);
        this.tareasCompletadas.delete(tarea.id_tarea);
      }, 1500);
    });
  }

  estaCompletada(tarea: { id_tarea: number }) {
    return this.tareasCompletadas.has(tarea.id_tarea);
  }
}