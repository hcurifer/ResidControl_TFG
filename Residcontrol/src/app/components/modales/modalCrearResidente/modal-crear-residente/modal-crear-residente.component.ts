import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-modal-crear-residente',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-crear-residente.component.html',
  styleUrl: './modal-crear-residente.component.scss'
})
export class ModalCrearResidenteComponent {
  nombre = '';
  apellidos = '';
  habitacion = '';
  edad: number | null = null;
  ubicacion = '';
  estado = 'en residencia';

  constructor(
    private api: ApiService,
    private dialogRef: MatDialogRef<ModalCrearResidenteComponent>,
    private snackBar: MatSnackBar
  ) {}

  crearResidente() {
    const hoy = new Date().toISOString().split('T')[0]; // formato YYYY-MM-DD

    const nuevo = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      habitacion: this.habitacion,
      edad: this.edad ?? null,
      ubicacion: this.ubicacion ?? null,
      estado: this.estado,
      fecha_ingreso: hoy
    };

    this.api.postResidente(nuevo).subscribe({
      next: () => {
        this.snackBar.open('Residente creado correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.dialogRef.close();
      },
      error: () => {
        this.snackBar.open('Error al crear residente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }

  cancelar() {
    this.dialogRef.close();
  }
}
