import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../../components/menu/menu.component';
import { TareasPendientesComponent } from '../../../components/tareas-pendientes/tareas-pendientes.component';
import { TareasCompletadasComponent } from '../../../components/tareas-completadas/tareas-completadas.component';

@Component({
  selector: 'app-page-tareas',
  standalone: true,
  imports: [CommonModule, MenuComponent, TareasPendientesComponent, TareasCompletadasComponent],
  templateUrl: './page-tareas.component.html',
  styleUrl: './page-tareas.component.scss'
})
export class PageTareasComponent {
  tareasPendientes = [
    { descripcion: 'Realizar cama residentes', horas: 4 },
    { descripcion: 'Preparar medicina comida', horas: 2 },
    { descripcion: 'Preparar bandejas comida', horas: 2 },
    { descripcion: 'Preparar bandejas comida', horas: 2 },
    { descripcion: 'Preparar medicina comida', horas: 2 },
    { descripcion: 'Preparar bandejas comida', horas: 2 },
    { descripcion: 'Preparar bandejas comida', horas: 2 }
  ];

  tareasCompletadas = [
    { descripcion: 'Levantar a residentes', horas: 3 },
    { descripcion: 'Recibir urgencia turno noche', horas: 2 },
    { descripcion: 'Duchar residentes dependientes', horas: 2 },
    { descripcion: 'Duchar residentes dependientes', horas: 2 }
  ];
}
