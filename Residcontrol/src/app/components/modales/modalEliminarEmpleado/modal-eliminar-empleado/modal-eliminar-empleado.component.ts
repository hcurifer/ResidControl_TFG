import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-eliminar-empleado',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  templateUrl: './modal-eliminar-empleado.component.html',
  styleUrl: './modal-eliminar-empleado.component.scss'
})
export class ModalEliminarEmpleadoComponent {
  empleados = [
    {
      nombre: 'Carlos',
      apellidos: 'Rodríguez Fernández',
      numeroEmpresa: 3,
      rol: 'Administrador',
      email: 'carlos@residencia.com',
      imagen: 'assets/img/user-placeholder.png'
    },
    {
      nombre: 'María',
      apellidos: 'Sánchez Pérez',
      numeroEmpresa: 7,
      rol: 'Enfermero',
      email: 'maria@residencia.com',
      imagen: 'assets/img/user-placeholder.png'
    }
  ];

  empleadoSeleccionado: any = null;

  constructor(
    private dialogRef: MatDialogRef<ModalEliminarEmpleadoComponent>,
    private snackBar: MatSnackBar
  ) {}

  eliminar() {
    this.snackBar.open('Usuario eliminado correctamente', 'Cerrar', {
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
