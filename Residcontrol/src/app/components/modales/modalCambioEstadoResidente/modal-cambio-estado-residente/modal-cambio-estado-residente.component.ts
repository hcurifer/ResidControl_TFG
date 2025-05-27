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
  selector: 'app-modal-cambio-estado-residente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-cambio-estado-residente.component.html',
  styleUrl: './modal-cambio-estado-residente.component.scss'
})
export class ModalCambioEstadoResidenteComponent {
  residentes = [
    {
      nombre: 'María',
      apellidos: 'García Pérez',
      habitacion: '101',
      edad: 82,
      estado: 'Autónomo',
      imagen: 'assets/img/user-placeholder.png'
    },
    {
      nombre: 'Luis',
      apellidos: 'Pérez Ruiz',
      habitacion: '102',
      edad: 79,
      estado: 'Dependiente parcial',
      imagen: 'assets/img/user-placeholder.png'
    }
  ];

  estadosDisponibles = [
    'Autónomo',
    'Dependiente parcial',
    'Dependiente total',
    'En hospital',
    'Fuera temporalmente',
    'Egresado'
  ];

  residenteSeleccionado: any = null;
  nuevoEstado: string = '';

  constructor(
    private dialogRef: MatDialogRef<ModalCambioEstadoResidenteComponent>,
    private snackBar: MatSnackBar
  ) {}

  cambiarEstado() {
    this.snackBar.open('Estado del residente actualizado', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });

    this.dialogRef.close();
  }

  cerrar() {
    this.dialogRef.close();
  }
}
