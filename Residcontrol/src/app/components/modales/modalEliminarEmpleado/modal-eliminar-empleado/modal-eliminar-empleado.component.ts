import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../../../services/api.service';

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
export class ModalEliminarEmpleadoComponent implements OnInit {
  empleados: any[] = [];
  empleadoSeleccionado: any = null;

  constructor(
    private api: ApiService,
    private dialogRef: MatDialogRef<ModalEliminarEmpleadoComponent>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.api.getUsuarios().subscribe((data) => {
      this.empleados = data;
    });
  }

  eliminar() {
    if (!this.empleadoSeleccionado?.id_usuario) return;

    this.api.deleteUsuario(this.empleadoSeleccionado.id_usuario).subscribe({
      next: () => {
        this.snackBar.open('Usuario eliminado correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.dialogRef.close();
      },
      error: () => {
        this.snackBar.open('Error al eliminar el usuario', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }

  cerrar() {
    this.dialogRef.close();
  }
}
