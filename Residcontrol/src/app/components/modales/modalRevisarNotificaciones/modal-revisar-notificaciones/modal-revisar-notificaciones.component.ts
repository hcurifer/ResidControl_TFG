import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modal-revisar-notificaciones',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule
  ],
  templateUrl: './modal-revisar-notificaciones.component.html',
  styleUrl: './modal-revisar-notificaciones.component.scss'
})
export class ModalRevisarNotificacionesComponent {
  notificaciones = [
    {
      usuario: 'Carlos Rodríguez',
      alarma: 'Alarma 021',
      texto: 'No se pudo completar la alarma de caída.',
      fecha: new Date('2025-05-26T15:30:00')
    },
    {
      usuario: 'Lucía Pérez',
      alarma: 'Alarma 020',
      texto: 'Falta supervisión en sala 2.',
      fecha: new Date('2025-05-26T14:50:00')
    }
    // ...
  ]
    .sort((a, b) => b.fecha.getTime() - a.fecha.getTime())
    .slice(0, 10);


  constructor(private dialogRef: MatDialogRef<ModalRevisarNotificacionesComponent>) {}

  cerrar() {
    this.dialogRef.close();
  }
}
