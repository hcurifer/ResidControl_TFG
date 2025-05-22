import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-notificacion-alarma',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-notificacion-alarma.component.html',
  styleUrls: ['./modal-notificacion-alarma.component.scss']
})
export class ModalNotificacionAlarmaComponent {
  alarmaSeleccionada: string = '';
  mensaje: string = '';

  alarmasPendientes: string[] = [
    'Residente Ana - Caída en baño',
    'Residente Luis - Ausencia prolongada',
    'Residente Marta - Grito de auxilio'
  ];

  constructor(
    private dialogRef: MatDialogRef<ModalNotificacionAlarmaComponent>,
    private snackBar: MatSnackBar
  ) {}

  enviarNotificacion() {
    const asunto = 'Notificación sobre la alarma';
    const cuerpo = `
IMPORTANTE: notificación sobre alarma

Alarma: ${this.alarmaSeleccionada}

${this.mensaje}
    `.trim();

    console.log('NOTIFICACIÓN ENVIADA:', { asunto, cuerpo });

    this.snackBar.open('Notificación enviada correctamente', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });

    this.dialogRef.close();
  }

  cancelar() {
    this.dialogRef.close();
  }
}
