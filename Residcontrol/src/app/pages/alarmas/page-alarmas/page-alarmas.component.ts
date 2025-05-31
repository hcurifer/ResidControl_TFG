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
  pendientes = 0;
  fechaSeleccionada: Date = new Date();  
  porcentaje_completado!: number

  // Constuctores
  constructor(private dialog: MatDialog, private api: ApiService) {}

  ngOnInit(){
    const fechaFormateada = format(new Date(), 'yyyy-MM-dd');
    this.getAlarmas(fechaFormateada)  
  }

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
    this.getAlarmas(fechaFormateada)
  }

  getAlarmas(fecha: string){
    this.api.get<any[]>(`/alarmas/filtrar?estado=completada&fecha=${fecha}`)
      .subscribe(completadas => {
        this.completadas = completadas.length;
        console.log('✅ Completadas:', completadas);
        this.api.get<any[]>(`/alarmas/filtrar?estado=pendiente&fecha=${fecha}`)
          .subscribe(pendientes => {
            console.log('🟡 Pendientes:', pendientes);

            this.pendientes = pendientes.length;
            this.totalAlertas = this.completadas + this.pendientes;
            this.porcentaje_completado = this.completadas/this.totalAlertas*100
            console.log(this.porcentaje_completado)
          });
      });
  }

  get porcentaje(): number {
    return Math.round((this.completadas / this.totalAlertas) * 100);
  }
}
