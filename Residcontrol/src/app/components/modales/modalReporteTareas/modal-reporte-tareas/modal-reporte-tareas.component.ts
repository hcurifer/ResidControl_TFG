import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-reporte-tareas',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-reporte-tareas.component.html',
  styleUrls: ['./modal-reporte-tareas.component.scss']
})
export class ModalReporteTareasComponent {
  turnoSeleccionado: string = '';
  tareasCompletadas: string[] = ['Administrar medicación', 'Revisión de signos vitales'];
  tareasPendientes: string[] = ['Limpieza habitación 204', 'Registro en ficha médica'];

  constructor(
    private dialogRef: MatDialogRef<ModalReporteTareasComponent>,
    private snackBar: MatSnackBar
  ) {}

  enviarReporte() {
    const fechaHoy = new Date().toLocaleDateString();
    const asunto = `Reporte de tareas enviadas del turno ${this.turnoSeleccionado}`;
    const cuerpo = `
Fecha: ${fechaHoy}
Turno: ${this.turnoSeleccionado.toUpperCase()}

Tareas Completadas:
- ${this.tareasCompletadas.join('\n- ')}

Tareas Pendientes:
- ${this.tareasPendientes.join('\n- ')}
    `.trim();

    console.log('CORREO ENVIADO:', { asunto, cuerpo });

    this.snackBar.open('Reporte enviado correctamente', 'Cerrar', {
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
