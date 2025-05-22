import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-reporte-dia',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-reporte-dia.component.html',
  styleUrls: ['./modal-reporte-dia.component.scss']
})
export class ModalReporteDiaComponent {
  fechaSeleccionada: Date | null = null;

  tareas: Record<string, { completadas: string[]; pendientes: string[] }> = {
    mañana: {
      completadas: ['Administrar medicamentos', 'Cambiar sábanas'],
      pendientes: ['Revisión de presión arterial']
    },
    tarde: {
      completadas: ['Acompañamiento comedor'],
      pendientes: ['Registro de actividad']
    },
    noche: {
      completadas: ['Control nocturno'],
      pendientes: ['Informe diario']
    }
  };

  constructor(
    private dialogRef: MatDialogRef<ModalReporteDiaComponent>,
    private snackBar: MatSnackBar
  ) {}

  enviarReporte() {
    const fecha = this.fechaSeleccionada?.toLocaleDateString() || '[Fecha no seleccionada]';
    const asunto = `Reporte de tareas del día`;

    const cuerpo = Object.entries(this.tareas).map(
      ([turno, tareas]) => `
Turno ${turno.toUpperCase()}:
  - Completadas:
    ${tareas.completadas.map(t => `• ${t}`).join('\n    ')}
  - Pendientes:
    ${tareas.pendientes.map(t => `• ${t}`).join('\n    ')}
`).join('\n');

    console.log('ENVIAR CORREO:', {
      asunto,
      fecha,
      body: `Día: ${fecha}\n\n${cuerpo}`
    });

    this.snackBar.open('Reporte diario enviado correctamente', 'Cerrar', {
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
