import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-tareas-completadas',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './tareas-completadas.component.html',
  styleUrls: ['./tareas-completadas.component.scss']
})
export class TareasCompletadasComponent {
  @Input() tareas: { descripcion: string; horas: number }[] = [];
}
