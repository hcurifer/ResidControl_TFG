import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-tareas-pendientes',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './tareas-pendientes.component.html',
  styleUrls: ['./tareas-pendientes.component.scss']
})
export class TareasPendientesComponent {
  @Input() tareas: { descripcion: string; horas: number }[] = [];
}
