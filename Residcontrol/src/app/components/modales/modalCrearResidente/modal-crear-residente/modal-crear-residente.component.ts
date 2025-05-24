import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-crear-residente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-crear-residente.component.html',
  styleUrls: ['./modal-crear-residente.component.scss']
})
export class ModalCrearResidenteComponent {
  nombre = '';
  apellidos = '';
  habitacion = '';
  edad: number | null = null;
  estado = '';
  ingreso = '';

  constructor(
    private dialogRef: MatDialogRef<ModalCrearResidenteComponent>,
    private snackBar: MatSnackBar
  ) {}

  cancelar() {
    this.dialogRef.close();
  }

  crear() {
    this.snackBar.open('Residente creado correctamente', 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });

    this.dialogRef.close();
  }
}
