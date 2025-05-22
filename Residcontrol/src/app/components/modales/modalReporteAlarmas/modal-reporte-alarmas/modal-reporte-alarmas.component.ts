import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-reporte-alarmas',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-reporte-alarmas.component.html',
  styleUrls: ['./modal-reporte-alarmas.component.scss']
})
export class ModalReporteAlarmasComponent {
  fechaSeleccionada: Date | null = null;

  alarmasPendientes: string[] = [
    'Residente Ana - Caída en baño',
    'Residente Luis - Ausencia prolongada'
  ];

  alarmasCompletadas: string[] = [
    'Residente María - Medicación administrada',
    'Residente José - Acompañado a su habitación'
  ];

  constructor(
    private dialogRef: MatDialogRef<ModalReporteAlarmasComponent>,
    private snackBar: MatSnackBar
  ) {}

  enviarReporte() {
    const fecha = this.fechaSeleccionada?.toLocaleDateString() ?? '[fecha no seleccionada]';
    const asunto = 'Estado actual de las alarmas';

    const cuerpo = `
Día del reporte: ${fecha}

🔴 Alarmas pendientes:
${this.alarmasPendientes.map(a => `- ${a}`).join('\n')}

✅ Alarmas completadas:
${this.alarmasCompletadas.map(a => `- ${a}`).join('\n')}
    `.trim();

    console.log('CORREO ENVIADO:', { asunto, cuerpo });

    this.snackBar.open('Reporte de alarmas enviado correctamente', 'Cerrar', {
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
