import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-nueva-alarma',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-nueva-alarma.component.html',
  styleUrls: ['./modal-nueva-alarma.component.scss']
})
export class ModalNuevaAlarmaComponent {
  descripcion: string = '';
  personalSeleccionado: string = '';
  residenteSeleccionado: string = '';

  listaPersonal: string[] = ['Enfermero 1', 'Enfermero 2', 'Supervisora'];
  listaResidentes: string[] = ['María García', 'Luis Pérez', 'Ana López'];

  constructor(
    private dialogRef: MatDialogRef<ModalNuevaAlarmaComponent>,
    private snackBar: MatSnackBar
  ) {}

  crearAlarma() {
    console.log('NUEVA ALARMA:', {
      descripcion: this.descripcion,
      personal: this.personalSeleccionado,
      residente: this.residenteSeleccionado
    });

    this.snackBar.open('Alarma creada correctamente', 'Cerrar', {
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
