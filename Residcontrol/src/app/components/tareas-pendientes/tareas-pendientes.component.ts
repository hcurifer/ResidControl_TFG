import { Component, Input } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  @Input() tareas: { descripcion: string; horas: number }[] = [];
  tareasCompletadas: Set<string> = new Set();

  completarTarea(tarea: { descripcion: string; horas: number }) {
    this.tareasCompletadas.add(tarea.descripcion);

    setTimeout(() => {
      this.tareas = this.tareas.filter(t => t.descripcion !== tarea.descripcion);
      this.tareasCompletadas.delete(tarea.descripcion);
    }, 1500); 
  }

  estaCompletada(tarea: { descripcion: string }) {
    return this.tareasCompletadas.has(tarea.descripcion);
  }
}