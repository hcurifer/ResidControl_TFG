import { Component } from '@angular/core';
import { AlertasComponent } from '../../../components/alertas/alerta/alerta.component';
import { MenuComponent } from '../../../components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProgressCircleComponent } from '../../../components/ProgressCircle/progreso/progreso.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalNuevaAlarmaComponent } from '../../../components/modales/modalNuevaAlarma/modal-nueva-alarma/modal-nueva-alarma.component';
import { ModalReporteAlarmasComponent } from '../../../components/modales/modalReporteAlarmas/modal-reporte-alarmas/modal-reporte-alarmas.component';



@Component({
  selector: 'app-page-alarmas',
  standalone: true,
  imports: [CommonModule, MenuComponent, AlertasComponent, MatButtonModule, ProgressCircleComponent, ModalNuevaAlarmaComponent,ModalReporteAlarmasComponent],
  templateUrl: './page-alarmas.component.html',
  styleUrl: './page-alarmas.component.scss'
})
export class PageAlarmasComponent {
  totalAlertas = 8; 
  completadas = 5;  

  // Constuctores
  constructor(private dialog: MatDialog) {}

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




  get porcentaje(): number {
    return Math.round((this.completadas / this.totalAlertas) * 100);
  }
}
