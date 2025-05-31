import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateService } from '../../services/date.service';
import { ApiService } from '../../services/api.service';


interface Tarea { id_tarea: number, descripcion: string; duracion_minutos: number }

@Component({
  selector: 'app-tareas',
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss',
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
export class TareasComponent {
  @Input() tareas_completadas: Tarea[] = [];
  @Input() tareas_pendientes: Tarea[] = [];
  tareasCompletadas: Set<string> = new Set();

  constructor(private dateService: DateService, private api: ApiService){}

  completarTarea(tarea: Tarea) {
    this.api.putEstadoTarea(tarea.id_tarea, 'completada').subscribe({
      next: () => {
        this.tareas_completadas.push(tarea);

        setTimeout(() => {
          this.tareas_pendientes = this.tareas_pendientes.filter(t => t.id_tarea !== tarea.id_tarea);
          // this.tareasCompletadas.delete(tarea.descripcion);
        }, 1500); 
      },
      error: (err: any) => {
        console.error('Error al obtener alarmas:', err);
      }
    });
  }

  estaCompletada(tarea: Tarea) {
    return this.tareas_completadas.some(item => item.id_tarea === tarea.id_tarea);
  }

  formatDate(minutos: number){
    return this.dateService.formatHorasMinutos(minutos)
  }
}
