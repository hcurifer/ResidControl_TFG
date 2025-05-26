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
  selector: 'app-modal-eliminar-residente',
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
  templateUrl: './modal-eliminar-residente.component.html',
  styleUrl: './modal-eliminar-residente.component.scss'
})
export class ModalEliminarResidenteComponent {
  residentes = [
    {
      nombre: 'María',
      apellidos: 'García Pérez',
      habitacion: '101',
      edad: 82,
      estado: 'Dependiente parcial',
      imagen: 'assets/img/user-placeholder.png'
    },
    {
      nombre: 'Luis',
      apellidos: 'Pérez Ruiz',
      habitacion: '102',
      edad: 79,
      estado: 'Autónomo',
      imagen: 'assets/img/user-placeholder.png'
    }
  ];

  residenteSeleccionado: any = null;

  constructor(
    private dialogRef: MatDialogRef<ModalEliminarResidenteComponent>,
    private snackBar: MatSnackBar
  ) {}

  eliminar() {
    this.snackBar.open('Residente eliminado correctamente', 'Cerrar', {
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
