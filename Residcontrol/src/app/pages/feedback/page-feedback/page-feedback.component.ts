import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../../components/menu/menu.component';
import { ProgressCircleComponent } from '../../../components/ProgressCircle/progreso/progreso.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalPeticionDiaComponent } from '../../../components/modales/modalPeticionDia/modal-peticion-dia/modal-peticion-dia.component';
import { ModalReporteTareasComponent } from '../../../components/modales/modalReporteTareas/modal-reporte-tareas/modal-reporte-tareas.component';
import { ModalReporteDiaComponent } from '../../../components/modales/modalReporteDia/modal-reporte-dia/modal-reporte-dia.component';
import { ModalRevisarFeedbackComponent } from '../../../components/modales/modalRevisarFeedback/modal-revisar-feedback/modal-revisar-feedback.component';



@Component({
  selector: 'app-page-feedback',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    ProgressCircleComponent,
    MatButtonModule,
    MatDialogModule,
    ModalRevisarFeedbackComponent
  ],
  templateUrl: './page-feedback.component.html',
  styleUrl: './page-feedback.component.scss'
})
export class PageFeedbackComponent {
  tareasPendientes = [10, 50, 75]; // Mañana, Tarde, Noche
  tareasCompletadas = [90, 50, 25];
  cargaTrabajo = 35;

  constructor(private dialog: MatDialog) {}

  abrirModalRevisarFeedback() {
    this.dialog.open(ModalRevisarFeedbackComponent, {
      width: '480px',
      disableClose: false,
      hasBackdrop: true
    });
  }
  abrirModalReporteTareas() {
    this.dialog.open(ModalReporteTareasComponent, {
      disableClose: false,
      hasBackdrop: true,
      width: '420px'
    });
  }
  abrirModalReporteDia() {
    this.dialog.open(ModalReporteDiaComponent, {
      disableClose: false,
      hasBackdrop: true,
      width: '440px'
    });
  }


}
