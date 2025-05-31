import { Component } from '@angular/core';
import { MenuComponent } from '../../../components/menu/menu.component';
import { CommonModule, formatDate } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProgressCircleComponent } from '../../../components/ProgressCircle/progreso/progreso.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalNuevaAlarmaComponent } from '../../../components/modales/modalNuevaAlarma/modal-nueva-alarma/modal-nueva-alarma.component';
import { ModalReporteAlarmasComponent } from '../../../components/modales/modalReporteAlarmas/modal-reporte-alarmas/modal-reporte-alarmas.component';
import { ModalNotificacionAlarmaComponent } from '../../../components/modales/modalNotificacionAlarma/modal-notificacion-alarma/modal-notificacion-alarma.component';
import { ApiService } from '../../../services/api.service';
import { AlertasComponent } from '../../../components/alertas/alerta/alerta.component';
import { format } from 'date-fns';

@Component({
  selector: 'app-page-alarmas',
  standalone: true,
  imports: [CommonModule, MenuComponent, AlertasComponent, MatButtonModule, ProgressCircleComponent, ModalNuevaAlarmaComponent, ModalReporteAlarmasComponent, ModalNotificacionAlarmaComponent],
  templateUrl: './page-alarmas.component.html',
  styleUrl: './page-alarmas.component.scss'
})
export class PageAlarmasComponent {
  totalAlertas = 0; 
  completadas = 0;
  fechaSeleccionada: Date = new Date();  

  // Constuctores
  constructor(private dialog: MatDialog, private api: ApiService) {}

  abrirModalNuevaAlarma() {
    this.dialog.open(ModalNuevaAlarmaComponent, {
      disableClose: false,
      hasBackdrop: true,
      width: '460px'
    });
  }

  abrirModalReporteAlarmas() {
    this.dialog.open(ModalReporteAlarmasComponent, {
      disableClose: false,
      hasBackdrop: true,
      width: '440px'
    });
  }

  abrirModalNotificacionAlarma() {
    this.dialog.open(ModalNotificacionAlarmaComponent, {
      disableClose: false,
      hasBackdrop: true,
      width: '460px'
    });
  }

  onFechaCambiada(fecha: Date) {
    const fechaFormateada = format(fecha, 'yyyy-MM-dd');

    this.api.get<any[]>(`/alarmas/filtrar?estado=completada&fecha=${fechaFormateada}`)
      .subscribe(completadas => {
        this.api.get<any[]>(`/alarmas/filtrar?estado=pendiente&fecha=${fechaFormateada}`)
          .subscribe(pendientes => {
            console.log('✅ Completadas:', completadas);
            console.log('🟡 Pendientes:', pendientes);

            this.completadas = completadas.length;
            this.totalAlertas = completadas.length + pendientes.length;
          });
      });
  }

  get porcentaje(): number {
    return Math.round((this.completadas / this.totalAlertas) * 100);
  }
}
