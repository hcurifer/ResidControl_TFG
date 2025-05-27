import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal-revisar-feedback',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './modal-revisar-feedback.component.html',
  styleUrl: './modal-revisar-feedback.component.scss'
})
export class ModalRevisarFeedbackComponent {
  feedbacks = [
    {
      tipo: 'Reporte de turno',
      turno: 'mañana',
      fecha: new Date('2025-05-26T10:30:00'),
      contenido: 'Tareas completadas: 4. Tareas pendientes: 2.'
    },
    {
      tipo: 'Petición de día',
      fecha: new Date('2025-05-25T15:20:00'),
      contenido: 'Solicitud para el día 27/05/2025.'
    },
    {
      tipo: 'Reporte del día',
      fecha: new Date('2025-05-25T20:15:00'),
      contenido: 'Resumen de tareas por turno: mañana, tarde y noche.'
    }
  ]
    .sort((a, b) => b.fecha.getTime() - a.fecha.getTime()) // más nuevo primero
    .slice(0, 10); // máximo 10 entradas

  constructor(private dialogRef: MatDialogRef<ModalRevisarFeedbackComponent>) {}

  cerrar() {
    this.dialogRef.close();
  }
}
