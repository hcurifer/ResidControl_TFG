import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiService } from '../../../../services/api.service';
import { format } from 'date-fns';

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
export class ModalAsignarTareaComponent implements OnInit {
  fecha: Date | null = null;
  turno: string = '';
  usuarioSeleccionado: number | null = null;
  usuarios: any[] = [];

  tareas = [{ descripcion: '', horas: null }];

  constructor(
    private dialogRef: MatDialogRef<ModalAsignarTareaComponent>,
    private snackBar: MatSnackBar,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.apiService.getUsuarios().subscribe(users => {
      this.usuarios = users;
    });
  }

  enviarTareas() {
    const tareasValidas = this.tareas.filter(t => t.descripcion && t.horas);

    if (!this.fecha || !this.turno || !this.usuarioSeleccionado || tareasValidas.length === 0) {
      this.snackBar.open('Completa todos los campos antes de enviar.', 'Cerrar', { duration: 3000 });
      return;
    }

    const fechaFormateada = format(this.fecha, 'yyyy-MM-dd');

    const peticiones = tareasValidas.map(t => {
      return this.apiService.postTarea({
        descripcion: t.descripcion,
        estado: 'pendiente',
        fecha: fechaFormateada,
        duracion_minutos: Number(t.horas) * 60,
        id_usuario: this.usuarioSeleccionado,
        id_turno: null 
      });
    });

    Promise.all(peticiones.map(p => p.toPromise()))
      .then(() => {
        this.snackBar.open('Tareas creadas correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.dialogRef.close();
      })
      .catch(() => {
        this.snackBar.open('Error al asignar tareas', 'Cerrar', { duration: 3000 });
      });
  }

  cancelar() {
    this.dialogRef.close();
  }
}