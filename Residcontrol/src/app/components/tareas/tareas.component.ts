import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-tareas',
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.scss'
})
export class TareasComponent {
  @Input() tareas_completadas: { descripcion: string; horas: number }[] = [];
  @Input() tareas_pendientes: { descripcion: string; horas: number }[] = [];
  tareasCompletadas: Set<string> = new Set();

  ngOnInit(){
    console.log(this.tareas_completadas)
    console.log(this.tareas_pendientes)
  }
  completarTarea(tarea: { descripcion: string; horas: number }) {
    this.tareas_completadas.push(tarea);

    setTimeout(() => {
      this.tareas_pendientes = this.tareas_pendientes.filter(t => t.descripcion !== tarea.descripcion);
      // this.tareasCompletadas.delete(tarea.descripcion);
    }, 1500); 
  }

  estaCompletada(tarea: { descripcion: string; horas: number }) {
    return this.tareas_completadas.some(item => item.descripcion === tarea.descripcion);
  }
}
