import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-asignar-tarea',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './modal-asignar-tareas.component.html',
  styleUrl: './modal-asignar-tareas.component.scss'
})
export class ModalAsignarTareaComponent {
  fecha: Date | null = null;
  turno: string = '';
  usuarioSeleccionado: string = '';
  usuarios: string[] = ['Carlos', 'Lucía', 'Ana'];

  tareas = [{ descripcion: '', horas: null }];

  constructor(
    private dialogRef: MatDialogRef<ModalAsignarTareaComponent>,
    private snackBar: MatSnackBar
  ) {}

  enviarTareas() {
    const tareasValidas = this.tareas.filter(t => t.descripcion && t.horas);
    if (tareasValidas.length === 0) {
      this.snackBar.open('Debe completar al menos una tarea', 'Cerrar', { duration: 3000 });
      return;
    }

    console.log('TAREAS ASIGNADAS:', {
      fecha: this.fecha,
      turno: this.turno,
      usuario: this.usuarioSeleccionado,
      tareas: tareasValidas
    });

    this.snackBar.open('Tareas asignadas correctamente', 'Cerrar', {
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
