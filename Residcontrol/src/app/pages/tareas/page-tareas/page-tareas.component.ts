import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../../components/menu/menu.component';
import { TareasPendientesComponent } from '../../../components/tareas-pendientes/tareas-pendientes.component';
import { TareasCompletadasComponent } from '../../../components/tareas-completadas/tareas-completadas.component';
import { TareasComponent } from "../../../components/tareas/tareas.component";
import { format } from 'date-fns';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-page-tareas',
  standalone: true,
  imports: [CommonModule, MenuComponent, TareasPendientesComponent, TareasCompletadasComponent, TareasComponent],
  templateUrl: './page-tareas.component.html',
  styleUrl: './page-tareas.component.scss'
})
export class PageTareasComponent implements OnInit {
  tareasPendientes: any[] = [];
  tareasCompletadas: any[] = [];

  constructor(private apiService: ApiService) {}

 ngOnInit(): void {
  const user = JSON.parse(localStorage.getItem('user')!);
  const id_usuario = user?.id_usuario;
  const hoy = format(new Date(), 'yyyy-MM-dd');

  this.apiService.getTareasFiltradas(id_usuario, hoy, undefined, 'pendiente').subscribe(tareas => {
    this.tareasPendientes = tareas;
  });

  this.apiService.getTareasFiltradas(id_usuario, hoy, undefined, 'completada').subscribe(tareas => {
    this.tareasCompletadas = tareas;
  });
}


}
